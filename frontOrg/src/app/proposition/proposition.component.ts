import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../Services/crud.service';

@Component({
  selector: 'app-proposition',
  templateUrl: './proposition.component.html',
  styleUrls: ['./proposition.component.css']
})
export class PropositionComponent implements OnInit {

  proposition = {
    objet: '',
    contenu: ''
  
  };

  constructor( private service: CrudService,) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    this.service.ajouterProposition(this.proposition).subscribe(
      response => {
        console.log(response);

      },
      error => {
        console.log(error);
      }
    );
  }
  
}
