import { Component, OnInit } from '@angular/core';
import { DemandeBus } from '../Model/demandeBus.model';
import { CrudService } from '../Services/crud.service';

@Component({
  selector: 'app-deman-bus-admin',
  templateUrl: './deman-bus-admin.component.html',
  styleUrls: ['./deman-bus-admin.component.css'],
})
export class DemanBusAdminComponent implements OnInit {
  listBus: DemandeBus[] = [];

  constructor(private services: CrudService) {}
  getDemandesAcceptees(){
    this.services.getDemandesAcceptees().subscribe(res => {
      this.listBus=res;
    })
  }
  onDeleteDemande(demande : DemandeBus) {
    if(confirm("Voulez vous annuler cette demande ?")) {
     
      this.services.supprimerdemandeBus(demande.id!).subscribe(res =>{
        this.getDemandesAcceptees();
      })
    }
  }
  ngOnInit(): void {this.getDemandesAcceptees();}
}
