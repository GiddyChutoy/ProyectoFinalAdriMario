import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable({ providedIn: 'root' })
export class ServicioTienda {

    constructor(private toastr: ToastrService, private http: HttpClient) { }

    idProducto: number;

    guardarIdProducto(id) {
        this.idProducto = id;
    }

    añadirProducto(producto) {
        console.log(producto);
        let arrayProductos = [];
        if (JSON.parse(localStorage.getItem('productos')) == null) {
            arrayProductos = [];
        } else {
            arrayProductos = JSON.parse(localStorage.getItem('productos'));
        }
        if (arrayProductos == null || arrayProductos == undefined) {
            console.log("entra");
            arrayProductos.push(producto)
        } else {
            arrayProductos = [...arrayProductos]
            arrayProductos.push(producto)
        }
        this.toastr.info("Ha añadido el producto al carrito");
        console.log(arrayProductos);
        localStorage.setItem('productos', JSON.stringify(arrayProductos));
    }

}