import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RouterModule } from '@angular/router';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';
import { OrgsConfirComponent } from './orgs-confir/orgs-confir.component';
import { OrgsAttenteComponent } from './orgs-attente/orgs-attente.component';
import { DemanSalleAdminComponent } from './deman-salle-admin/deman-salle-admin.component';
import { DemanSalleAdminNonConfComponent } from './deman-salle-admin-non-conf/deman-salle-admin-non-conf.component';
import { DemanMatAdminComponent } from './deman-mat-admin/deman-mat-admin.component';
import { DemanMatAdminNonConfComponent } from './deman-mat-admin-non-conf/deman-mat-admin-non-conf.component';
import { DemanBusAdminComponent } from './deman-bus-admin/deman-bus-admin.component';
import { DemanBusAdminNonConfComponent } from './deman-bus-admin-non-conf/deman-bus-admin-non-conf.component';
import { PropositionAdminComponent } from './proposition-admin/proposition-admin.component';
import { ReclamationAdminComponent } from './reclamation-admin/reclamation-admin.component';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { DemandeBusRefComponent } from './demande-bus-ref/demande-bus-ref.component';
import { ModifOrgComponent } from './modif-org/modif-org.component';
import { DemandeSalleRefComponent } from './demande-salle-ref/demande-salle-ref.component';
import { DemandeMaterielRefComponent } from './demande-materiel-ref/demande-materiel-ref.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    AccueilAdminComponent,
    OrgsConfirComponent,
    OrgsAttenteComponent,
    DemanSalleAdminComponent,
    DemanSalleAdminNonConfComponent,
    DemanMatAdminComponent,
    DemanMatAdminNonConfComponent,
    DemanBusAdminComponent,
    DemanBusAdminNonConfComponent,
    PropositionAdminComponent,
    ReclamationAdminComponent,
    LoginComponent,
    NavbarComponent,
    DemandeBusRefComponent,
    ModifOrgComponent,
    DemandeSalleRefComponent,
    DemandeMaterielRefComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
