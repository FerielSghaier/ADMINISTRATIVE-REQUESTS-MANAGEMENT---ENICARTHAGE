import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { DemandeSalle } from '../Model/demandeSalle.model';
import { DemandeMateriel } from '../Model/demandeMateriel.model';
import { DemandeBus } from '../Model/demandeBus.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.page.html',
  styleUrls: ['./acceuil.page.scss'],
})
export class AcceuilPage implements OnInit {
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
  listSalle: DemandeSalle[] = [];
  listMateriel: DemandeMateriel[] = [];
  listBus: DemandeBus[] = [];

  constructor(
    private services: CrudService,
    private router: Router,) { }
  
  getDemandesSalleAcceptees(){
    this.services.getDemandesSalleAcceptees().subscribe(res => {
      this.listSalle=res;
    })
  }

  getDemandesMatAcceptees(){
    this.services.getDemandesMaterielAcceptees().subscribe(res => {
      this.listMateriel=res;
    })
  }
 

  getDemandesBusAcceptees(){
    this.services.getDemandesAcceptees().subscribe(res => {
      this.listBus=res;
    })
  }
  
  ngOnInit(): void{
    this.getDemandesSalleAcceptees();
    this.getDemandesMatAcceptees();
    this.getDemandesBusAcceptees()
  }

}
