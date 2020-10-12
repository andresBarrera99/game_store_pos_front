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
  {
    path: 'products/create',
    loadChildren: () => import('./pages/products/create-product/create-product.module').then( m => m.CreateProductPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/main-products/main-products.module').then( m => m.MainProductsPageModule)
  },
  {
    path: 'products/update',
    loadChildren: () => import('./pages/products/edit-product/edit-product.module').then( m => m.EditProductPageModule)
  },
  {
    path: 'rent/create',
    loadChildren: () => import('./pages/rent/create-rent/create-rent.module').then( m => m.CreateRentPageModule)
  },  {
    path: 'search-daily-rent',
    loadChildren: () => import('./pages/rent/search-daily-rent/search-daily-rent.module').then( m => m.SearchDailyRentPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
