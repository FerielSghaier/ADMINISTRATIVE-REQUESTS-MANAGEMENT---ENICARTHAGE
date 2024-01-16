import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandeMaterielPage } from './demande-materiel.page';

const routes: Routes = [
  {
    path: '',
    component: DemandeMaterielPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandeMaterielPageRoutingModule {}
