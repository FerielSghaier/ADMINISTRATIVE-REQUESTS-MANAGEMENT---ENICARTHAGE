import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../Services/crud.service';

@Component({
  selector: 'app-demande-materiel',
  templateUrl: './demande-materiel.component.html',
  styleUrls: ['./demande-materiel.component.css']
})
export class DemandeMaterielComponent implements OnInit {

  demandeMateriel = {
    materiel: '',
    quantite: '',
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
    this.service.ajoutdemandeMateriel(this.demandeMateriel).subscribe(
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
