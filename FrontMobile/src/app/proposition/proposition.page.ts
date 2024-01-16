import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proposition',
  templateUrl: './proposition.page.html',
  styleUrls: ['./proposition.page.scss'],
})
export class PropositionPage implements OnInit {
  proposition = {
    objet: '',
    contenu: ''
  
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
  constructor(private service: CrudService,
    private router: Router) { }

  ngOnInit() {
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
  annuler(): void {
    if(confirm("Voulez vous annuler l'envoi du Proposition ?")) {
      this.router.navigate(['/acceuil']);
    }
      
  }
}
