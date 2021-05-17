import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  constructor(private http: HttpClient) { 
  }

 
  getProductos(){
    return this.http.get<any>("http://localhost:8080/ardkalic/productos");
  }

  getProductoPorID(idProducto){
    return this.http.get<any>("http://localhost:8080/ardkalic/productos/" + idProducto);
  }
  getProductosTipo(tipo){
    return this.http.get<any>("http://localhost:8080/ardkalic/productos/categoria/" + tipo);
  }

  getProductosBuscador(tipo){
    return this.http.get<any>("http://localhost:8080/ardkalic/productos/?tipo=" + tipo);
  }

  

  getMarcas(){
    return this.http.get<any>("http://localhost:8080/ardkalic/marcas");
  }

  getCategorias(){
    return this.http.get<any>("http://localhost:8080/ardkalic/categorias");
  }


  deleteProducto(id){
    
    return this.http.delete<any>("http://localhost:8080/ardkalic/productos/borrar/" + id)
  }


  getProductoMarca(marca){
    return this.http.get<any>("http://localhost:8080/ardkalic/productos/marca/" + marca)
  }
}
