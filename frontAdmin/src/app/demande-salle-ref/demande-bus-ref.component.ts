import { Component, OnInit } from '@angular/core';
import { DemandeBus } from '../Model/demandeBus.model';
import { CrudService } from '../Services/crud.service';

@Component({
  selector: 'app-demande-bus-ref',
  templateUrl: './demande-bus-ref.component.html',
  styleUrls: ['./demande-bus-ref.component.css']
})
export class DemandeBusRefComponent implements OnInit {

  listBus: DemandeBus[] = [];

  constructor(private services: CrudService) {}
  getDemandesRefusees(){
    this.services.getDemandesRefusees().subscribe(res => {
      this.listBus=res;
    })
  }
  onDeleteDemande(demande : DemandeBus) {
    if(confirm("Voulez vous supprimer cette demande ?")) {
     
      this.services.supprimerdemandeBus(demande.id!).subscribe(res =>{
        this.getDemandesRefusees();
      })
    }
  }

  ngOnInit(): void {this.getDemandesRefusees()
  }

}
