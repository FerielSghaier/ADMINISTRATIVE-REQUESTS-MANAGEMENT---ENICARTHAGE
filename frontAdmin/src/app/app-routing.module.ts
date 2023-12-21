import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';
import { DemanBusAdminComponent } from './deman-bus-admin/deman-bus-admin.component';
import { DemanBusAdminNonConfComponent } from './deman-bus-admin-non-conf/deman-bus-admin-non-conf.component';
import { DemandeBusRefComponent } from './demande-bus-ref/demande-bus-ref.component';
import { DemanMatAdminComponent } from './deman-mat-admin/deman-mat-admin.component';
import { DemanMatAdminNonConfComponent } from './deman-mat-admin-non-conf/deman-mat-admin-non-conf.component';
import { LoginComponent } from './login/login.component';
import { DemanSalleAdminComponent } from './deman-salle-admin/deman-salle-admin.component';
import { DemanSalleAdminNonConfComponent } from './deman-salle-admin-non-conf/deman-salle-admin-non-conf.component';
import { OrgsAttenteComponent } from './orgs-attente/orgs-attente.component';
import { OrgsConfirComponent } from './orgs-confir/orgs-confir.component';
import { PropositionAdminComponent } from './proposition-admin/proposition-admin.component';
import { ReclamationAdminComponent } from './reclamation-admin/reclamation-admin.component';
import { DemandeSalleRefComponent } from './demande-salle-ref/demande-salle-ref.component';
import { DemandeMaterielRefComponent } from './demande-materiel-ref/demande-materiel-ref.component';




const routes: Routes = [
  {path:"", component: LoginComponent},
  { path: 'accueil', component: AccueilAdminComponent },
  { path: 'demande-bus', component: DemanBusAdminComponent },
  { path: 'demande-busNC', component: DemanBusAdminNonConfComponent },
  { path: 'accueil', component: AccueilAdminComponent },
  { path: 'demande-bus', component: DemanBusAdminComponent },
  { path: 'demande-materiel', component: DemanMatAdminComponent },
  { path: 'demande-materielNC', component: DemanMatAdminNonConfComponent },
  { path: 'demande-salle', component: DemanSalleAdminComponent },
  { path: 'demande-salleNC', component: DemanSalleAdminNonConfComponent },
  { path: 'orgsenattente', component: OrgsAttenteComponent },
  { path: 'orgsacceptees', component: OrgsConfirComponent },
  { path: 'propositions', component: PropositionAdminComponent },
  { path: 'reclamations', component: ReclamationAdminComponent },
  { path: 'demande-busRF', component: DemandeBusRefComponent },
  { path: 'demande-salleRF', component: DemandeSalleRefComponent },
  { path: 'demande-materielRF', component: DemandeMaterielRefComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }