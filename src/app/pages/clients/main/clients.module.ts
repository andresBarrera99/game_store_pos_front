import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './clients-routing.module';

import { ClientsPage } from './clients.page';
import { AppComponentsModule } from '../../../components/components.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppComponentsModule,
    MainPageRoutingModule
  ],
  declarations: [ClientsPage]
})
export class ClientsPageModule {}
