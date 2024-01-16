import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandeSallePage } from './demande-salle.page';

const routes: Routes = [
  {
    path: '',
    component: DemandeSallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandeSallePageRoutingModule {}
