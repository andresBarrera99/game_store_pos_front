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
    loadChildren: () => import('./pages/rent/main/rent.module').then( m => m.RentPageModule),
    canActivate: [RouteGuardService]
  },
  {
    path: 'clients',
    loadChildren: () => import('./pages/clients/main/clients.module').then( m => m.ClientsPageModule),
    canActivate: [RouteGuardService]
  },
  {
    path: 'clients/update',
    loadChildren: () => import('./pages/clients/update/update-client.module').then( m => m.UpdatePageModule),
    canActivate: [RouteGuardService]
  },
  {
    path: 'clients/create',
    loadChildren: () => import('./pages/clients/create/create-client.module').then( m => m.CreateClientPageModule),
    canActivate: [RouteGuardService]
  },
  {
    path: 'products/create',
    loadChildren: () => import('./pages/products/create-product/create-product.module').then( m => m.CreateProductPageModule),
    canActivate: [RouteGuardService]
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/main-products/main-products.module').then( m => m.MainProductsPageModule),
    canActivate: [RouteGuardService]
  },
  {
    path: 'products/update',
    loadChildren: () => import('./pages/products/edit-product/edit-product.module').then( m => m.EditProductPageModule),
    canActivate: [RouteGuardService]
  },
  {
    path: 'rent/create',
    loadChildren: () => import('./pages/rent/create-rent/create-rent.module').then( m => m.CreateRentPageModule),
    canActivate: [RouteGuardService]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
