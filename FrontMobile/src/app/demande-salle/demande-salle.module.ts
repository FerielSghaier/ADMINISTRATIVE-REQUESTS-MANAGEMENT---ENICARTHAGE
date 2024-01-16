import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandeSallePageRoutingModule } from './demande-salle-routing.module';

import { DemandeSallePage } from './demande-salle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandeSallePageRoutingModule
  ],
  declarations: [DemandeSallePage]
})
export class DemandeSallePageModule {}
