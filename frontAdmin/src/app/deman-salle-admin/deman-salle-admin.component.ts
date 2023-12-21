import { Component, OnInit } from '@angular/core';
import { DemandeSalle } from '../Model/demandeSalle.model';
import { CrudService } from '../Services/crud.service';

@Component({
  selector: 'app-deman-salle-admin',
  templateUrl: './deman-salle-admin.component.html',
  styleUrls: ['./deman-salle-admin.component.css']
})
export class DemanSalleAdminComponent implements OnInit {

  listSalle: DemandeSalle[] = [];

  constructor(private services: CrudService) {}
  getDemandesAcceptees(){
    this.services.getDemandesSalleAcceptees().subscribe(res => {
      this.listSalle=res;
    })
  }
  onDeleteDemande(demande : DemandeSalle) {
    if(confirm("Voulez vous annuler cette demande ?")) {
     
      this.services.supprimerdemandeSalle(demande.id!).subscribe(res =>{
        this.getDemandesAcceptees();
      })
    }
  }

  ngOnInit(): void {this.getDemandesAcceptees()
  }

}
