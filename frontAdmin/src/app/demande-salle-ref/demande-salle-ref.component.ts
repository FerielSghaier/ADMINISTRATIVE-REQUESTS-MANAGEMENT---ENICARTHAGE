import { Component, OnInit } from '@angular/core';
import { DemandeSalle } from '../Model/demandeSalle.model';
import { CrudService } from '../Services/crud.service';

@Component({
  selector: 'app-demande-salle-ref',
  templateUrl: './demande-salle-ref.component.html',
  styleUrls: ['./demande-salle-ref.component.css']
})
export class DemandeSalleRefComponent implements OnInit {

  listSalle: DemandeSalle[] = [];

  constructor(private services: CrudService) {}
  getDemandesRefusees(){
    this.services.getDemandesSalleRefusees().subscribe(res => {
      this.listSalle=res;
    })
  }
  onDeleteDemande(demande : DemandeSalle) {
    if(confirm("Voulez vous supprimer cette demande ?")) {
     
      this.services.supprimerdemandeSalle(demande.id!).subscribe(res =>{
        this.getDemandesRefusees();
      })
    }
  }

  ngOnInit(): void {this.getDemandesRefusees()
  }

}
