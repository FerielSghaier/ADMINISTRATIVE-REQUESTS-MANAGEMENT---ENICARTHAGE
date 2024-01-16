import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'acceuil',
    loadChildren: () => import('./acceuil/acceuil.module').then( m => m.AcceuilPageModule)
  },
  {
    path: 'demande-salle',
    loadChildren: () => import('./demande-salle/demande-salle.module').then( m => m.DemandeSallePageModule)
  },
  {
    path: 'demande-materiel',
    loadChildren: () => import('./demande-materiel/demande-materiel.module').then( m => m.DemandeMaterielPageModule)
  },
  {
    path: 'demande-bus',
    loadChildren: () => import('./demande-bus/demande-bus.module').then( m => m.DemandeBusPageModule)
  },
  {
    path: 'reclamation',
    loadChildren: () => import('./reclamation/reclamation.module').then( m => m.ReclamationPageModule)
  },
  {
    path: 'proposition',
    loadChildren: () => import('./proposition/proposition.module').then( m => m.PropositionPageModule)
  },
 
    
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
