import { Component, OnInit } from '@angular/core';
import { DemandeMateriel } from '../Model/demandeMateriel.model';
import { CrudService } from '../Services/crud.service';

@Component({
  selector: 'app-demande-materiel-ref',
  templateUrl: './demande-materiel-ref.component.html',
  styleUrls: ['./demande-materiel-ref.component.css']
})
export class DemandeMaterielRefComponent implements OnInit {

  listMateriel: DemandeMateriel[] = [];

  constructor(private services: CrudService) {}
  getDemandesRefusees(){
    this.services.getDemandesMaterielRefusees().subscribe(res => {
      this.listMateriel=res;
    })
  }
  onDeleteDemande(demande : DemandeMateriel) {
    if(confirm("Voulez vous supprimer cette demande ?")) {
     
      this.services.supprimerdemandeMateriel(demande.id!).subscribe(res =>{
        this.getDemandesRefusees();
      })
    }
  }

  ngOnInit(): void {this.getDemandesRefusees()
  }}
