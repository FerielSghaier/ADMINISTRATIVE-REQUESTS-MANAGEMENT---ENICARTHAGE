import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formModel={
    userName: '',
    password: ''
  }

  constructor(
    private services: CrudService , 
    private router: Router,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) { }
  onSubmit(form:NgForm){
    console.log(form.value); 
    this.services.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/acceuil');
      },
      (err: any) => {
        console.log(err);
        this.router.navigateByUrl('/acceuil'); // Afficher l'erreur dans la console
      /*  if (err.status === 404) {
          // Organization not found
          this.openSnackBar('Account not found!', 'Close');
      }*/
      }
    );
    
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
        duration: 3000, // Snackbar duration in milliseconds
    });
}
  ngOnInit() {
  }

}
