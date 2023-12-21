import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../Services/crud.service';

@Component({
  selector: 'app-demande-salle',
  templateUrl: './demande-salle.component.html',
  styleUrls: ['./demande-salle.component.css']
})
export class DemandeSalleComponent implements OnInit {
  demandeSalle = {
    numSalle: '',
    batiment: '',
    date: '',
    temps: '',
    duree: '',
    raison: '',
    id_org: 2,
    nom_org:"MELKART Junior Entreprise",
  };

  constructor( private service: CrudService,
    private router: Router,) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    this.service.ajoutdemandeSalle(this.demandeSalle).subscribe(
      response => {
        console.log(response);

      },
      error => {
        console.log(error);
      }
    );
  }
  annuler(): void {
    if(confirm("Voulez vous annuler l'envoi du demande ?")) {
      this.router.navigateByUrl('/accueil')
    }
      
  }

}
