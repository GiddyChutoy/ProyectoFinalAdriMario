import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ServicioTienda {
    productos= new Subject<any>();
    constructor(private toastr: ToastrService, private http: HttpClient) { }

    idProducto: number;
    modalBoolean: boolean;

    guardarIdProducto(id) {
        this.idProducto = id;
    }

    añadirProducto(producto) {
       
        let arrayProductos = [];
        

        if (JSON.parse(sessionStorage.getItem('productos')) == null) {
            arrayProductos = [];
            arrayProductos.push(producto);
            
        } else {
            arrayProductos = JSON.parse(sessionStorage.getItem('productos'));
            const index=arrayProductos.findIndex(el=> el.id === producto.id);
            if(index === -1){
                arrayProductos.push(producto)
            }else{
                const copiaProducto=JSON.parse(JSON.stringify(producto))
                const total= arrayProductos[index].cantidadProducto + copiaProducto.cantidadProducto
                copiaProducto.cantidadProducto=total;
                arrayProductos[index]=copiaProducto 
            }
        }
        sessionStorage.setItem('productos', JSON.stringify(arrayProductos));
        this.setProducto(arrayProductos);
        this.toastr.info("Ha añadido el producto al carrito");
       
      
    }

    cambioModal(boolean) {
        this.modalBoolean = boolean;
    }

    setProducto(productos:any){
        this.productos.next(productos);
    }
    getProducto(){
        return this.productos;
    }

    sendListaCompra(datos){
        return this.http.post("http://localhost:8080/ardkalic/cesta/anadir",datos);
    }
}