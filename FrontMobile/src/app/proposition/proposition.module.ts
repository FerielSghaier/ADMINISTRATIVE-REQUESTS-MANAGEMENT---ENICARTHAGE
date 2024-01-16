import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropositionPageRoutingModule } from './proposition-routing.module';

import { PropositionPage } from './proposition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropositionPageRoutingModule
  ],
  declarations: [PropositionPage]
})
export class PropositionPageModule {}
