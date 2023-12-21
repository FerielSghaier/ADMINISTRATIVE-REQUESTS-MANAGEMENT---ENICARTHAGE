import { Component, OnInit } from '@angular/core';
import { DemandeBus } from '../Model/demandeBus.model';
import { CrudService } from '../Services/crud.service';

@Component({
  selector: 'app-deman-bus-admin-non-conf',
  templateUrl: './deman-bus-admin-non-conf.component.html',
  styleUrls: ['./deman-bus-admin-non-conf.component.css']
})
export class DemanBusAdminNonConfComponent implements OnInit {
  listBus: DemandeBus[] = [];
  constructor(private services: CrudService) { }
  getDemandesEnattente(){
    this.services.getDemandesEnAttente().subscribe(res => {
      this.listBus=res;
    })
  }
  refuserDemande(demande : DemandeBus) {
    if(confirm("Voulez vous refuser cette demande ?")) {
     
      this.services.refuserDemande(demande.id!).subscribe(res =>{
        this.getDemandesEnattente();
      })
    }
  }
  accepterDemande(demande : DemandeBus) {
    if(confirm("Voulez vous accepter cette demande ?")) {
     
      this.services.accepterDemande(demande.id!).subscribe(res =>{
        this.getDemandesEnattente();
      })
    }
  }
  ngOnInit(): void {this.getDemandesEnattente();
  }

}
