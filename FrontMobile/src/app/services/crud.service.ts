import { Injectable } from '@angular/core';
import { Organisation } from '../Model/organisation.model';
import { Observable, catchError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  private Url = 'http://localhost:8083/';
  private baseUrl = 'http://localhost:8083/api/demandeBus';
  private baseUrl2 = 'http://localhost:8083/api/demandeMateriel';
  private baseUrl3 = 'http://localhost:8083/api/demandeSalle';
  private propUrl = 'http://localhost:8083/api/proposition';
  private reclUrl = 'http://localhost:8083/api/reclamation';

  [x: string]: any;

  constructor(private http: HttpClient) { }
  login(formData: any){
    return this.http.post(this.apiUrl + '/organisation/login', formData);
  }

  registerOrganisation(organisation: Organisation): Observable<any> {
    return this.http.post(`${this.Url}organisation/registerorganisation`, organisation);
  }
  deleteOrganisation(id : number){
    const url = `${this.apiUrl+"/organisation"}/${id}`
    return this.http.delete(url , httpOptions);
  }
  ajoutorganisation(organisation: Organisation): Observable<any> {
    return this.http.post(`${this.apiUrl}/organisation`, organisation);
  }
  getDemandesMaterielAcceptees(): Observable<any> {
    return this.http.get(`${this.baseUrl2}/acceptees`);
  }
  getDemandesAcceptees(): Observable<any> {
    return this.http.get(`${this.baseUrl}/acceptees`);
  }
  getDemandesSalleAcceptees(): Observable<any> {
    return this.http.get(`${this.baseUrl3}/acceptees`);
  }
  ajoutdemandeBus(demandeBusDto: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, demandeBusDto).pipe(
      catchError((error: any) => {
        console.error(error);
        throw error;
      })
    );;
  }
  ajoutdemandeSalle(demandeSalleDto: any): Observable<any> {
    return this.http.post(`${this.baseUrl3}`, demandeSalleDto);
  }
  ajoutdemandeMateriel(demandeMaterielDto: any): Observable<any> {
    return this.http.post(`${this.baseUrl2}`, demandeMaterielDto);
  }
ajouterProposition(proposition: Proposition): Observable<Proposition> {
    return this.http.post<Proposition>(`${this.propUrl}`, proposition);
  }
  ajouterReclamation(reclamation: Reclamation): Observable<Reclamation> {
    return this.http.post<Reclamation>(`${this.reclUrl}`, reclamation);
  }
}
