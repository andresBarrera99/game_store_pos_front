import { NgModule } from '@angular/core';
import { RouteGuardService } from './service/guard/route-guard.service'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [RouteGuardService]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./pages/logout/logout.module').then( m => m.LogoutPageModule),
    canActivate: [RouteGuardService]
  },
  {
    path: 'rent',
    loadChildren: () => import('./pages/rent/main/rent.module').then( m => m.RentPageModule)
  },
  {
    path: 'clients',
    loadChildren: () => import('./pages/clients/main/clients.module').then( m => m.ClientsPageModule)
  },
  {
    path: 'clients/update',
    loadChildren: () => import('./pages/clients/update/update-client.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'clients/create',
    loadChildren: () => import('./pages/clients/create/create-client.module').then( m => m.CreateClientPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
