import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../Services/crud.service';

@Component({
  selector: 'app-demande-bus',
  templateUrl: './demande-bus.component.html',
  styleUrls: ['./demande-bus.component.css']
})
export class DemandeBusComponent implements OnInit {
  demandeBus = {
    destination: '',
    dateDep: '',
    dateArr: '',
    heureDep: '',
    heureArr: '',
    raison: '',
    id_org: 2,
    nom_org:"MELKART Junior Entreprise",
  };

  constructor( private service: CrudService,
    private router: Router,) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    this.service.ajoutdemandeBus(this.demandeBus).subscribe(
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


