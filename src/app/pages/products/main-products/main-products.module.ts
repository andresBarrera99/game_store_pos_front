import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainProductsPageRoutingModule } from './main-products-routing.module';

import { MainProductsPage } from './main-products.page';
import { AppComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppComponentsModule,
    MainProductsPageRoutingModule
  ],
  declarations: [MainProductsPage]
})
export class MainProductsPageModule {}
