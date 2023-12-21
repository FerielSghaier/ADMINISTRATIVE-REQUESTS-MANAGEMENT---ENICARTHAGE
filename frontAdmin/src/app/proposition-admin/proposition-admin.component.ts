import { Component, OnInit } from '@angular/core';
import { Proposition } from '../Model/proposition.model';
import { CrudService } from '../Services/crud.service';

@Component({
  selector: 'app-proposition-admin',
  templateUrl: './proposition-admin.component.html',
  styleUrls: ['./proposition-admin.component.css']
})
export class PropositionAdminComponent implements OnInit {

  propositions: Proposition[] = [];

  constructor(private services: CrudService) {}
  getPropositions(){
    this.services.afficherProposition().subscribe(res => {
      this.propositions=res;
    })
  }
  onDeleteProp(proposition : Proposition) {
    if(confirm("Voulez vous supprimer cette proposition ?")) {
     
      this.services.supprimerPropById(proposition.id!).subscribe(res =>{
        this.getPropositions();
      })
    }
  }

  ngOnInit(): void { this.getPropositions()
  }

}
