import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropositionPage } from './proposition.page';

const routes: Routes = [
  {
    path: '',
    component: PropositionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropositionPageRoutingModule {}
