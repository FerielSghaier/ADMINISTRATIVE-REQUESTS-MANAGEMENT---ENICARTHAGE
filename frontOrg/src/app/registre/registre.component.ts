import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../Services/crud.service';
import { NgToastService } from 'ng-angular-popup';
import { Organisation } from '../Model/organisation.model';


@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {
   organisation: Organisation= {
    nom: '',
    type: '',
    logo:'',
    description: '',
    tel: 0,
    email:'',
    mdp:'',
    nomResp:'',
    prenomResp:''
  };

  constructor(private _formBuilder: FormBuilder,
    private service: CrudService,
    private router: Router,
    private toast : NgToastService) { }
  
  FormGroup = this._formBuilder.group({
    nom: ['', Validators.required],
    type: ['', Validators.required],
    logo: ['', Validators.required],
    description: ['', Validators.required],
    tel: ['', Validators.required],
    email: ['', Validators.email],
    mdp: ['', Validators.required],
    nomResp: ['', Validators.required],
    prenomResp: ['', Validators.required],
  
  });

  onSubmit(){
    this.service.ajoutorganisation(this.organisation).subscribe(
      response => {
        console.log(response);

      },
      error => {
        console.log(error);
      }
    );
    if(confirm("Confirmer")) {
      this.router.navigateByUrl('')
    }
  }
  get nom(){
    return this.FormGroup.get('nom')
  }
  get type(){
    return this.FormGroup.get('nom')
  }
  get logo(){
    return this.FormGroup.get('nom')
  }
  get description(){
    return this.FormGroup.get('nom')
  }
  get tel(){
    return this.FormGroup.get('nom')
  }
  get email(){
    return this.FormGroup.get('nom')
  }
  get mdp(){
    return this.FormGroup.get('nom')
  }
  get nomResp(){
    return this.FormGroup.get('nom')
  }
  get prenomResp(){
    return this.FormGroup.get('nom')
  }
  ngOnInit(): void {
  }

}
