import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandeBusPageRoutingModule } from './demande-bus-routing.module';

import { DemandeBusPage } from './demande-bus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandeBusPageRoutingModule
  ],
  declarations: [DemandeBusPage]
})
export class DemandeBusPageModule {}
