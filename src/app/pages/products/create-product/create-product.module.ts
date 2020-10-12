import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { CreateProductPageRoutingModule } from './create-product-routing.module';
import { CreateProductPage } from './create-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MatIconModule,
    MatListModule,
    CreateProductPageRoutingModule
  ],
  declarations: [CreateProductPage]
})
export class CreateProductPageModule {}
