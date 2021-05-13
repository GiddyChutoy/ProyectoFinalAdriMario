import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeticionesUsuarioService {

  constructor(private http: HttpClient) { }


  postUsuarios(datos){
    return this.http.post("http://localhost:8080/ardkalic/usuarios/anadirUser",datos)
  }

}
