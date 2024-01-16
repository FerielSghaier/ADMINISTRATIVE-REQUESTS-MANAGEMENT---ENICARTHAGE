import { Component, OnInit } from '@angular/core';
import { Organisation } from '../Model/organisation.model';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  organisation: Organisation = {
    nom: '',
    type: '',
    logo: '',
    description: '',
    tel: 0,
    email: '',
    mdp: '',
    nomResp: '',
    prenomResp: ''
  };

  FormGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private service: CrudService,
    private router: Router
  ) {
    this.FormGroup = this._formBuilder.group({
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
  }

  onSubmit() {
    this.service.ajoutorganisation(this.organisation).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );

    if (confirm("Confirmer")) {
      this.router.navigateByUrl('');
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
  }  getFormControl(controlName: string): AbstractControl | null {
    return this.FormGroup.get(controlName);
  }

  ngOnInit() {
  }
}
