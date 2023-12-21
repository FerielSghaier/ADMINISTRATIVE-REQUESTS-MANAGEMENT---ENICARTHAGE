import { Component, OnInit } from '@angular/core';
import { Reclamation } from '../Model/reclamation.model';
import { CrudService } from '../Services/crud.service';

@Component({
  selector: 'app-reclamation-admin',
  templateUrl: './reclamation-admin.component.html',
  styleUrls: ['./reclamation-admin.component.css']
})
export class ReclamationAdminComponent implements OnInit {

  reclamations: Reclamation[] = [];

  constructor(private services: CrudService) {}
  getReclamations(){
    this.services.afficherReclamation().subscribe(res => {
      this.reclamations=res;
    })
  }
  onDeleteRecl(reclamation : Reclamation) {
    if(confirm("Voulez vous supprimer cette réclamation ?")) {
     
      this.services.supprimerRecById(reclamation.id!).subscribe(res =>{
        this.getReclamations();
      })
    }
  }

  ngOnInit(): void {this.getReclamations()
  }

}
