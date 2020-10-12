import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateRentPage } from './create-rent.page';

const routes: Routes = [
  {
    path: '',
    component: CreateRentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateRentPageRoutingModule {}
