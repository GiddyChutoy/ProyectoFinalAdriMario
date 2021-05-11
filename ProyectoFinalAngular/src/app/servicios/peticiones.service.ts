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
    return this.http.get<any>("http://localhost:8080/categoria");
  }

  // postAnadirMarca(objeto){
  //   return this.http.post("http://localhost:8080/ardkalic/marcas/anadir",objeto);
  // }

  deleteProducto(id){
    
    return this.http.delete<any>("http://localhost:8080/ardkalic/productos/borrar/" + id)
  }


  getProductoLogitech(){
    return this.http.get<any>("http://localhost:8080/ardkalic/productos/logitech")
  }
}
