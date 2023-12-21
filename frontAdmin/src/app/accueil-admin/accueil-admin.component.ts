import { Component, OnInit } from '@angular/core';
import { DemandeBus } from '../Model/demandeBus.model';
import { DemandeMateriel } from '../Model/demandeMateriel.model';
import { DemandeSalle } from '../Model/demandeSalle.model';
import { Organisation } from '../Model/organisation.model';
import { Proposition } from '../Model/proposition.model';
import { Reclamation } from '../Model/reclamation.model';
import { CrudService } from '../Services/crud.service';

@Component({
  selector: 'app-accueil-admin',
  templateUrl: './accueil-admin.component.html',
  styleUrls: ['./accueil-admin.component.css']
})
export class AccueilAdminComponent implements OnInit {
  listOrgEnattente: Organisation[]=[] 
  listOrgAcceptees: Organisation[]=[]
  ListBus: DemandeBus[]=[] 
  listMateriel: DemandeMateriel[]=[]
  listSalle: DemandeSalle[]=[]
  listProp: Proposition[]=[]
  listRec: Reclamation[]=[]
  nbOrgsEnattente:number=0
  nbOrgsAcceptees:number=0
  nbDemBus:number=0
  nbDemMat:number=0
  nbDemSal:number=0
  nbProp:number=0
  nbRec:number=0
  constructor(
    private services: CrudService,
   
  ) { }
 
  ngOnInit(): void {
    this.getOrgsEnAttente();
    this.getOrgsAcceptees();
    this.getDemandesBus();
    this.getDemandesMateriel();
    this.getDemandesSalle();
    this.getReclamation();
    this.getProposition();
  }
  getOrgsEnAttente(){
    this.services.getOrgEnAttente().subscribe(res => {
      this.nbOrgsEnattente = res.length;
    })
  }
  getOrgsAcceptees(){
    this.services.getOrgsAcceptees().subscribe(res => {
      this.nbOrgsAcceptees = res.length;
    })
  }
  getDemandesBus(){
    this.services.afficherdemandeBus().subscribe(res => {
      this.nbDemBus = res.length;
    })
  }
  getDemandesMateriel(){
    this.services.afficherdemandeMateriel().subscribe(res => {
      this.nbDemMat = res.length;
    })
  }
  getDemandesSalle(){
    this.services.afficherdemandeSalle().subscribe(res => {
      this.nbDemSal = res.length;
    })
  }
  getReclamation(){
    this.services.afficherReclamation().subscribe(res => {
      this.nbRec = res.length;
    })
  }
  getProposition(){
    this.services.afficherProposition().subscribe(res => {
      this.nbProp = res.length;
    })
  }
  
}

