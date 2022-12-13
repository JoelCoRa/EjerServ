import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RecursoHumano } from '../../model/rh';

@Injectable({
  providedIn: 'root'
})
export class RechumanoService {

 
  constructor(private http: HttpClient) { }

  // private RH_API = 'https://rickandmortyapi.com/api/character';
  private RH_API = 'api/rh';
  getRecurso(): Observable<RecursoHumano[]>{
    return this.http.get<RecursoHumano[]>(this.RH_API);
  }
  createRH(recursoHumano: RecursoHumano): Observable<RecursoHumano>{
    return this.http.post<RecursoHumano>(this.RH_API, recursoHumano)
  }
  
  updateRH(recursoHumano: RecursoHumano): Observable<RecursoHumano>{
    return this.http.put<RecursoHumano>(this.RH_API, recursoHumano)
  }
  
}
