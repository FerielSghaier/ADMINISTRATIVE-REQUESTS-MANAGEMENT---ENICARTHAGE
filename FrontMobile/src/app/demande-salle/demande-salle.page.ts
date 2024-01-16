import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-demande-salle',
  templateUrl: './demande-salle.page.html',
  styleUrls: ['./demande-salle.page.scss'],
})
export class DemandeSallePage implements OnInit {
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
  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }
  public alertButtons = [
    {
      text: 'Annuler',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'Confirmer',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
        this.router.navigate(['/login']);
      },
    },
    
  ];

  setResult(ev: any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }
  constructor(
    private service: CrudService,
    private router: Router
  ) { }

  ngOnInit() {
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
      this.router.navigate(['/acceuil']);
    }
      
  }
}
