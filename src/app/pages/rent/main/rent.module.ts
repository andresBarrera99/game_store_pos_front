import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RentPageRoutingModule } from './rent-routing.module';

import { RentPage } from './rent.page';
import { AppComponentsModule } from '../../../components/components.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppComponentsModule,
    IonicModule,
    RentPageRoutingModule
  ],
  declarations: [RentPage]
})
export class RentPageModule {}
