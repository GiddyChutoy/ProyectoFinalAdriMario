import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeticionesUsuarioService {
  
  userData=new Subject<any>();
  
  constructor(private http: HttpClient) { }


  postUsuarios(datos){
    return this.http.post<any>("http://localhost:8080/ardkalic/usuarios/anadirUser",datos)
  }
  getUsuarios(){
    return this.http.get<any>("http://localhost:8080/ardkalic/usuarios");
  }
  comprobarLogin(username,password){
    return this.http.get<any>("http://localhost:8080/ardkalic/usuarios/" + username + "/" + password);
  }
  getUsuario(username){
    return this.http.get<any>("http://localhost:8080/ardkalic/usuarios/usuario/" + username);
  }
  putUsuario(datos){
    return this.http.put<any>("http://localhost:8080/ardkalic/usuarios/modificarUser",datos);
  }
  deleteUsuario(username){
    return this.http.delete<any>("http://localhost:8080/ardkalic/usuarios/borrar/" + username);
  }

  getUserData(){
    return this.userData;
  }

  setUserData(userdata){
    this.userData.next(userdata);
  }
}
