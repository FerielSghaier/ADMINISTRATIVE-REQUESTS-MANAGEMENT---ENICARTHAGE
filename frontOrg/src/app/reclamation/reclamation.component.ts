import { Component, OnInit } from '@angular/core';
import { CrudService } from '../Services/crud.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {

  reclamation = {
    objet: '',
    contenu: '',
    solution:''
  
  };

  constructor( private service: CrudService,) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    this.service.ajouterReclamation(this.reclamation).subscribe(
      response => {
        console.log(response);

      },
      error => {
        console.log(error);
      }
    );
  }

}
