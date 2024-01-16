import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandeBusPage } from './demande-bus.page';

const routes: Routes = [
  {
    path: '',
    component: DemandeBusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandeBusPageRoutingModule {}
