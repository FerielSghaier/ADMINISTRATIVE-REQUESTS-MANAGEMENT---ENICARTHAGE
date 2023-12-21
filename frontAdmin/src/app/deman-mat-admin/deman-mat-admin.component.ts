import { Component, OnInit } from '@angular/core';
import { DemandeMateriel } from '../Model/demandeMateriel.model';
import { CrudService } from '../Services/crud.service';

@Component({
  selector: 'app-deman-mat-admin',
  templateUrl: './deman-mat-admin.component.html',
  styleUrls: ['./deman-mat-admin.component.css']
})
export class DemanMatAdminComponent implements OnInit {

  listMateriel: DemandeMateriel[] = [];

  constructor(private services: CrudService) {}
  getDemandesAcceptees(){
    this.services.getDemandesMaterielAcceptees().subscribe(res => {
      this.listMateriel=res;
    })
  }
  onDeleteDemande(demande : DemandeMateriel) {
    if(confirm("Voulez vous annuler cette demande ?")) {
     
      this.services.supprimerdemandeMateriel(demande.id!).subscribe(res =>{
        this.getDemandesAcceptees();
      })
    }
  }

  ngOnInit(): void {this.getDemandesAcceptees()
  }

}
