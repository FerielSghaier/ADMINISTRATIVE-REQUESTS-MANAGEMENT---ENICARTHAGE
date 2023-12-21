import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { PropositionComponent } from './proposition/proposition.component';
import { RouterModule } from '@angular/router';
import { DemandeSalleComponent } from './demande-salle/demande-salle.component';
import { DemandeBusComponent } from './demande-bus/demande-bus.component';
import { DemandeMaterielComponent } from './demande-materiel/demande-materiel.component';
import { OrgsConfirComponent } from './orgs-confir/orgs-confir.component';
import { OrgsAttenteComponent } from './orgs-attente/orgs-attente.component';
import { LoginComponent } from './login/login.component';
import { NavbarOrgComponent } from './navbar-org/navbar-org.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { RegistreComponent } from './registre/registre.component';
import { MenuOrgComponent } from './menu-org/menu-org.component';
import { MessageOrgComponent } from './message-org/message-org.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    ReclamationComponent,
    PropositionComponent,
    DemandeSalleComponent,
    DemandeBusComponent,
    DemandeMaterielComponent,
    OrgsConfirComponent,
    OrgsAttenteComponent,
    LoginComponent,
    RegistreComponent,
    MenuOrgComponent,
    NavbarOrgComponent,
    MessageOrgComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
