import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Organisation } from '../Model/organisation.model';
import { CrudService } from '../Services/crud.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  listOrganisation: Organisation[]=[] 
  numberOfOrganisations:number=0

  constructor(
    private services: CrudService,
    private router: Router,
  ) { }
  getOrgsEnAttente(): Observable<number> {
    return this.services['getOrgEnAttente']().pipe(
      map((res: any[]) => {
        this.listOrganisation = res;
        return res.length;
      })
    );
  }
  

  ngOnInit(): void {
    this.getOrgsEnAttente();
  }

}
