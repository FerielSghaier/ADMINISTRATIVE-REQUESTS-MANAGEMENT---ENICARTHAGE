import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import {DemandeBusComponent } from './demande-bus/demande-bus.component';
import { DemandeMaterielComponent } from './demande-materiel/demande-materiel.component';
import { DemandeSalleComponent } from './demande-salle/demande-salle.component';
import { PropositionComponent } from './proposition/proposition.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { RegistreComponent } from './registre/registre.component';
import { MessageOrgComponent } from './message-org/message-org.component';



const routes: Routes = [
  {path:"", component: LoginComponent},
  { path: 'accueil', component: AccueilComponent },
  { path: 'demande-bus', component: DemandeBusComponent },
  { path: 'demande-materiel', component: DemandeMaterielComponent },
  { path: 'demande-salle', component: DemandeSalleComponent },
  { path: 'proposition', component: PropositionComponent },
  { path: 'reclamation', component: ReclamationComponent },
  { path: 'registre', component: RegistreComponent },
  { path: 'message', component: MessageOrgComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }