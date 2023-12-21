import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../Services/crud.service';
import { NgToastService } from 'ng-angular-popup';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formModel={
    userName: '',
    password: ''
  }


  constructor(
    private services: CrudService , 
    private router: Router,
    private fb: FormBuilder,
  ) { 
   
  }
  onSubmit(form:NgForm){
    console.log(form.value); // Vérifier si les données sont soumises correctement
    this.services.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/accueil');
      },
      (err: any) => {
        console.log(err); // Afficher l'erreur dans la console
      }
    );
    
  }
 /* loginOrg() {
    let data = this.loginForm.value;
    console.log(data);
    let org = new Organisation(
      undefined,undefined, undefined,undefined,undefined, undefined, data.email,data.mdp, undefined,undefined, undefined);
    console.log(Organisation);
    if(
   
      data.email == 0 ||
      data.mdp == 0 
    )
    {
      this.toast.info({
        detail: 'Error Message',
        summary: 'Remplir votre champs',
      });
    }else{
    this.services['loginOrg'](org).subscribe(
    
      res=>{
        console.log(res);
        let token = res.token;
        localStorage.setItem('mytoken', token);
        this.router.navigate(['accueil']);
        this.toast.success({
          detail: 'Succes Message',
          summary: 'Bienvenue',
        });
        
        this.router.navigate(['/accueil']);
      },
      err=>{
        console.log(err);  
        this.toast.error({
          detail: 'Error Message',
          summary: 'Probléme de Serveur',
        });
      }
   
    )}}*/

  ngOnInit(): void {
  }

}
