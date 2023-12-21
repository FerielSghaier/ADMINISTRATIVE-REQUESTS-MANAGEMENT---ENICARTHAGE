import { Component, OnInit } from '@angular/core';
import { DemandeSalle } from '../Model/demandeSalle.model';
import { CrudService } from '../Services/crud.service';

@Component({
  selector: 'app-deman-salle-admin-non-conf',
  templateUrl: './deman-salle-admin-non-conf.component.html',
  styleUrls: ['./deman-salle-admin-non-conf.component.css']
})
export class DemanSalleAdminNonConfComponent implements OnInit {
  
  listSalle: DemandeSalle[] = [];

  constructor(private services: CrudService) { }

  getDemandesEnattente(){
    this.services.getDemandesSalleEnAttente().subscribe(res => {
      this.listSalle=res;
    })
  }
  refuserDemande(demande : DemandeSalle) {
    if(confirm("Voulez vous refuser cette demande ?")) {
     
      this.services.refuserDemandeSalle(demande.id!).subscribe(res =>{
        this.getDemandesEnattente();
      })
    }
  }
  accepterDemande(demande : DemandeSalle) {
    if(confirm("Voulez vous accepter cette demande ?")) {
     
      this.services.accepterDemandeSalle(demande.id!).subscribe(res =>{
        this.getDemandesEnattente();
      })
    }}
  

  ngOnInit(): void {this.getDemandesEnattente()
  }

}
