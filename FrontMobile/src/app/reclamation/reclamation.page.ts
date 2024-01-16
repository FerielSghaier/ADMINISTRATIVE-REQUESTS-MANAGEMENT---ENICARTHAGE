import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.page.html',
  styleUrls: ['./reclamation.page.scss'],
})
export class ReclamationPage implements OnInit {
  reclamation = {
    objet: '',
    contenu: '',
    solution:''
  
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
    this.service.ajouterReclamation(this.reclamation).subscribe(
      response => {
        console.log(response);

      },
      error => {
        console.log(error);
      }
    );
  }
  annuler(): void {
    if(confirm("Voulez vous annuler l'envoi du Réclamation ?")) {
      this.router.navigate(['/acceuil']);
    }
      
  }
}
