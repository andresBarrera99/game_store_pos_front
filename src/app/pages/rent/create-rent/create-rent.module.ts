import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { CreateRentPageRoutingModule } from './create-rent-routing.module';

import { CreateRentPage } from './create-rent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MatIconModule,
    MatListModule,
    CreateRentPageRoutingModule
  ],
  declarations: [CreateRentPage]
})
export class CreateRentPageModule {}
