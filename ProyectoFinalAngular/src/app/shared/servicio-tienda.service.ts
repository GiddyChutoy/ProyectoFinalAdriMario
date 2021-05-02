import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class ServicioTienda {

    constructor(private http: HttpClient) {}

    //Metodo usado por todos los usuarios
    comprarComponente(idProducto: number) {


        //Necesitamos modificar la cantidad del componente restandole 1
        this.http
            .put('', {})
    }

    //Metodos solo usado por administradores
    // nuevoComponente(objeto: any){ //Habría que crear un objeto "componentePC" para pasarselo por parametro
    //     this.http
    //         .post('', {})
    // }

    // eliminarComponente(){
    //     this.http
    //         .delete('')
    // }

}