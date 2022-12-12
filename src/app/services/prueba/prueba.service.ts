import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  // private URL = 'https://rickandmortyapi.com/api/character';
  private URL = 'http://localhost/prueba/';

  constructor(private http: HttpClient) { }

  public getPersonajes(): Observable<any>{
    return this.http.get(this.URL);
  }

}
