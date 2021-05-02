import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  constructor(private http: HttpClient) { 
  }

  // getRatones(){
  //   return this.http.get<any>("http://localhost:8080/ardkalic/productos/ratones");
  // }
  //  getTeclados(){
  //   return this.http.get<any>("http://localhost:8080/ardkalic/productos/teclados");
  // }
  // getGraficas(){
  //   return this.http.get<any>("http://localhost:8080/ardkalic/productos/graficas");
  // }
  getProductos(){
    return this.http.get<any>("http://localhost:8080/ardkalic/productos/inicio");
  }

  getProductosTipo(tipo){
    return this.http.get<any>("http://localhost:8080/ardkalic/productos/" + tipo);
  }

  getProductosBuscador(tipo){
    return this.http.get<any>("http://localhost:8080/ardkalic/productos/?tipo=" + tipo);
  }
}
