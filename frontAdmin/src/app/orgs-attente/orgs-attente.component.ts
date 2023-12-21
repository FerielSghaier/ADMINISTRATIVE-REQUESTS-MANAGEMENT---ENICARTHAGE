import { Component, OnInit } from '@angular/core';
import { Organisation } from '../Model/organisation.model';
import { CrudService } from '../Services/crud.service';

@Component({
  selector: 'app-orgs-attente',
  templateUrl: './orgs-attente.component.html',
  styleUrls: ['./orgs-attente.component.css']
})
export class OrgsAttenteComponent implements OnInit {
  listOrganisation: Organisation[]=[] 

  constructor(    
    private services: CrudService,
    ) { }
    getOrginisations(){
      this.services.getOrgEnAttente().subscribe(res => {
        this.listOrganisation=res;
      })
    }
    onDeleteOrganisation(organisation : Organisation) {
      if(confirm("Voulez vous supprimer cette organisation ?")) {
       
        this.services.deleteOrganisation(organisation.id!).subscribe(res =>{
          this.getOrginisations();
        })
      }
    }
    confirmOrganisation(organisation : Organisation) {
      if(confirm("Voulez vous accepter cette organisation ?")) {
       
        this.services.confirmOrganisation(organisation.id!).subscribe(res =>{
          this.getOrginisations();
        })
      }
    }
  ngOnInit(): void {
    this.getOrginisations();
  }

}
