import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandeMaterielPageRoutingModule } from './demande-materiel-routing.module';

import { DemandeMaterielPage } from './demande-materiel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandeMaterielPageRoutingModule
  ],
  declarations: [DemandeMaterielPage]
})
export class DemandeMaterielPageModule {}
