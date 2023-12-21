import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../Model/admin.model';
import { DemandeBus } from '../Model/demandeBus.model';
import { DemandeMateriel } from '../Model/demandeMateriel.model';
import { DemandeSalle } from '../Model/demandeSalle.model';
import { Organisation } from '../Model/organisation.model';
import { Proposition } from '../Model/proposition.model';
import { Reclamation } from '../Model/reclamation.model';

const httpOptions ={
  headers: new HttpHeaders ({'Content-Type': 'application/json'}) 
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  apiUrl="http://localhost:8083/api";
  admUrl="http://localhost:8083/api/organisation/organisations";
  loginUrl="http://localhost:8083/api/admin/login";
  private baseUrl = 'http://localhost:8083/api/demandeBus';
  private baseUrl2 = 'http://localhost:8083/api/demandeMateriel';
  private baseUrl3 = 'http://localhost:8083/api/demandeSalle';
  private Url = 'http://localhost:8083/';
  private propUrl = 'http://localhost:8083/api/proposition';
  private reclUrl = 'http://localhost:8083/api/reclamation';

  [x: string]: any;

  constructor(private http: HttpClient) { }
  
  loginAdmin(admin: Admin){
    return this.http.post<any>(this.loginUrl, admin);
  }
  isLoggedIn(){

    let token = localStorage.getItem("mytoken");

    if (token) {
      return true ;
    } else {
      return false;
    }

  }
  getAdmin(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.apiUrl+'/admin');
  }
  //----------------------------------ORGANISATION---------------------------------------------------
  getOrganisation(): Observable<Organisation[]> {
    return this.http.get<Organisation[]>(this.apiUrl+'/organisation');
    
  }
  getOrgEnAttente(): Observable<any> {
    return this.http.get<Organisation[]>(this.apiUrl+'/organisation/enattente');
  }
  getOrgsAcceptees(): Observable<any> {
    return this.http.get<Organisation[]>(this.apiUrl+'/organisation/acceptees');
  }
  /*confirmOrganisation(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/organisation/organisations/${id}/confirm`,id);
  }*/
  confirmOrganisation(id: number): Observable<any> {
    const url = `${this.admUrl}/${id}/confirm`;
    return this.http.post(url, null);
  }
  supprimerorganisation(id: number): Observable<any> {
    return this.http.delete(`${this.Url}organisations/${id}`);
  }
  ajoutorganisation(organisation: Organisation): Observable<any> {
    return this.http.post(`${this.apiUrl}/organisation`, organisation);
  }
  modifierorganisation(id: number, organisation: Organisation): Observable<any> {
    return this.http.put(`${this.Url}organisations/${id}`, organisation);
  }

  afficherorganisation(): Observable<Organisation[]> {
    return this.http.get<Organisation[]>(`${this.Url}organisations`);
  }

 

  getOrganisationById(id: number): Observable<Organisation> {
    return this.http.get<Organisation>(`${this.Url}organisations/${id}`);
  }

  /*loginOrganisation(organisation: Organisation): Observable<any> {
    return this.http.post(`${this.Url}organisations/login`, organisation);
  }*/
  login(formData: any){
    return this.http.post(this.apiUrl + '/organisation/login', formData);
  }

  registerOrganisation(organisation: Organisation): Observable<any> {
    return this.http.post(`${this.Url}organisations/registerorganisation`, organisation);
  }
  deleteOrganisation(id : number){
    const url = `${this.apiUrl+"/organisation"}/${id}`
    return this.http.delete(url , httpOptions);
  }
  //-------------------------------------DEMANDE BUS ----------------------------------------------------
  ajoutdemandeBus(demandeBusDto: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, demandeBusDto);
  }

  modifierDemandeBus(id: number, demandeBus: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, demandeBus);
  }

  afficherdemandeBus(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  supprimerdemandeBus(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getDemandesEnAttente(): Observable<any> {
    return this.http.get(`${this.baseUrl}/enattente`);
  }
  
  getDemandesAcceptees(): Observable<any> {
    return this.http.get(`${this.baseUrl}/acceptees`);
  }
 

  getDemandesRefusees(): Observable<any> {
    return this.http.get(`${this.baseUrl}/refusees`);
  }

  accepterDemande(id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}/accepter`, {});
  }

  refuserDemande(id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}/refuser`, {});
  }

  listerDemandesBusParClub(organisationId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/organisation/${organisationId}`);
  }
  //----------------------------------------DEMANDE MATERIEL------------------------------------------------------

  ajoutdemandeMateriel(demandeMaterielDto: any): Observable<any> {
    return this.http.post(`${this.baseUrl2}`, demandeMaterielDto);
  }

  modifierDemandeMateriel(id: number, demandeMateriel: any): Observable<any> {
    return this.http.put(`${this.baseUrl2}/${id}`, demandeMateriel);
  }

  afficherdemandeMateriel(): Observable<any> {
    return this.http.get(`${this.baseUrl2}`);
  }

  supprimerdemandeMateriel(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl2}/${id}`);
  }

  getDemandesMaterielEnAttente(): Observable<any> {
    return this.http.get(`${this.baseUrl2}/enattente`);
  }

  getDemandesMaterielAcceptees(): Observable<any> {
    return this.http.get(`${this.baseUrl2}/acceptees`);
  }

  getDemandesMaterielRefusees(): Observable<any> {
    return this.http.get(`${this.baseUrl2}/refusees`);
  }

  accepterDemandeMateriel(id: number): Observable<any> {
    return this.http.put(`${this.baseUrl2}/${id}/accepter`, {});
  }

  refuserDemandeMateriel(id: number): Observable<any> {
    return this.http.put(`${this.baseUrl2}/${id}/refuser`, {});
  }

  listerDemandesMaterielParClub(organisationId: number): Observable<any> {
    return this.http.get(`${this.baseUrl2}/organisation/${organisationId}`);
  }
  //-----------------------------------------DEMANDE SALLE----------------------------------------------------------
  ajoutdemandeSalle(demandeSalleDto: any): Observable<any> {
    return this.http.post(`${this.baseUrl3}`, demandeSalleDto);
  }

  modifierDemandeSalle(id: number, demandeSalle: any): Observable<any> {
    return this.http.put(`${this.baseUrl3}/${id}`, demandeSalle);
  }

  afficherdemandeSalle(): Observable<any> {
    return this.http.get(`${this.baseUrl3}`);
  }

  supprimerdemandeSalle(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl3}/${id}`);
  }

  getDemandesSalleEnAttente(): Observable<any> {
    return this.http.get(`${this.baseUrl3}/enattente`);
  }

  getDemandesSalleAcceptees(): Observable<any> {
    return this.http.get(`${this.baseUrl3}/acceptees`);
  }

  getDemandesSalleRefusees(): Observable<any> {
    return this.http.get(`${this.baseUrl3}/refusees`);
  }

  accepterDemandeSalle(id: number): Observable<any> {
    return this.http.put(`${this.baseUrl3}/${id}/accepter`, {});
  }

  refuserDemandeSalle(id: number): Observable<any> {
    return this.http.put(`${this.baseUrl3}/${id}/refuser`, {});
  }

  listerDemandesSalleParClub(organisationId: number): Observable<any> {
    return this.http.get(`${this.baseUrl3}/organisation/${organisationId}`);
  }
//-------------------------------------------RECLAMATIONS------------------------------------------------------------
  ajouterReclamation(reclamation: Reclamation): Observable<Reclamation> {
    return this.http.post<Reclamation>(`${this.reclUrl}`, reclamation);
  }

  modifierReclamation(id: number, reclamation: Reclamation): Observable<Reclamation> {
    return this.http.put<Reclamation>(`${this.reclUrl}/${id}`, reclamation);
  }

  afficherReclamation(): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(`${this.reclUrl}`);
  }

  getReclamationById(id: number): Observable<Reclamation> {
    return this.http.get<Reclamation>(`${this.reclUrl}/${id}`);
  }

  supprimerRecById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.reclUrl}/${id}`);
  }
  //-------------------------------------------PROPOSITIONS------------------------------------------------------------
  ajouterProposition(proposition: Proposition): Observable<Proposition> {
    return this.http.post<Proposition>(`${this.propUrl}`, proposition);
  }

  modifierProposition(id: number, proposition: Proposition): Observable<Proposition> {
    return this.http.put<Proposition>(`${this.propUrl}/${id}`, proposition);
  }

  afficherProposition(): Observable<Proposition[]> {
    return this.http.get<Proposition[]>(`${this.propUrl}`);
  }

  getPropositionById(id: number): Observable<Proposition> {
    return this.http.get<Proposition>(`${this.propUrl}/${id}`);
  }

  supprimerPropById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.propUrl}/${id}`);
  }
  


  
  
}
