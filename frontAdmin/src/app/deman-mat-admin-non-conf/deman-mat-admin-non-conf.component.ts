import { Component, OnInit } from '@angular/core';
import { DemandeMateriel } from '../Model/demandeMateriel.model';
import { CrudService } from '../Services/crud.service';

@Component({
  selector: 'app-deman-mat-admin-non-conf',
  templateUrl: './deman-mat-admin-non-conf.component.html',
  styleUrls: ['./deman-mat-admin-non-conf.component.css']
})
export class DemanMatAdminNonConfComponent implements OnInit {

  listMateriel: DemandeMateriel[] = [];
  constructor(private services: CrudService) { }
  getDemandesEnattente(){
    this.services.getDemandesMaterielEnAttente().subscribe(res => {
      this.listMateriel=res;
    })
  }
  refuserDemande(demande : DemandeMateriel) {
    if(confirm("Voulez vous refuser cette demande ?")) {
     
      this.services.refuserDemandeMateriel(demande.id!).subscribe(res =>{
        this.getDemandesEnattente();
      })
    }
  }
  accepterDemande(demande : DemandeMateriel) {
    if(confirm("Voulez vous accepter cette demande ?")) {
     
      this.services.accepterDemandeMateriel(demande.id!).subscribe(res =>{
        this.getDemandesEnattente();
      })
    }
  }

  ngOnInit(): void {this.getDemandesEnattente();
  }

}
