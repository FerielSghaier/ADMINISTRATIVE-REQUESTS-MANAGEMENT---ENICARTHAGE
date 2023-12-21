import { Component, OnInit } from '@angular/core';
import { DemandeBus } from '../Model/demandeBus.model';
import { DemandeMateriel } from '../Model/demandeMateriel.model';
import { DemandeSalle } from '../Model/demandeSalle.model';
import { CrudService } from '../Services/crud.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  listSalle: DemandeSalle[] = [];
  listMateriel: DemandeMateriel[] = [];
  listBus: DemandeBus[] = [];


  constructor(private services: CrudService) {}
  getDemandesSalleAcceptees(){
    this.services.getDemandesSalleAcceptees().subscribe(res => {
      this.listSalle=res;
    })
  }

  getDemandesMatAcceptees(){
    this.services.getDemandesMaterielAcceptees().subscribe(res => {
      this.listMateriel=res;
    })
  }
 

  getDemandesBusAcceptees(){
    this.services.getDemandesAcceptees().subscribe(res => {
      this.listBus=res;
    })
  }
  
  ngOnInit(): void {
    this.getDemandesSalleAcceptees();
    this.getDemandesMatAcceptees();
    this.getDemandesBusAcceptees()
  }

}
