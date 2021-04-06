import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  constructor(private http: HttpClient) { 
  }

  getRatones(){
    return this.http.get<any>("http://localhost:8080/ardkalic/v1/productos/ratones");
  }
   getTeclados(){
    return this.http.get<any>("http://localhost:8080/ardkalic/v1/productos/teclados");
  }
  getGraficas(){
    return this.http.get<any>("http://localhost:8080/ardkalic/v1/productos/graficas");
  }
}
