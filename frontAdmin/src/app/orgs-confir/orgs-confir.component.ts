import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Organisation } from '../Model/organisation.model';
import { CrudService } from '../Services/crud.service';

@Component({
  selector: 'app-orgs-confir',
  templateUrl: './orgs-confir.component.html',
  styleUrls: ['./orgs-confir.component.css']
})
export class OrgsConfirComponent implements OnInit {
  listOrganisation: Organisation[]=[] 
  numberOfOrganisations:number=0

  constructor(
    private services: CrudService,
    private router: Router,
  ) { }

  getOrginisations(){
    this.services.getOrgsAcceptees().subscribe(res => {
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
  ngOnInit(): void {
    this.getOrginisations();
  }

}
