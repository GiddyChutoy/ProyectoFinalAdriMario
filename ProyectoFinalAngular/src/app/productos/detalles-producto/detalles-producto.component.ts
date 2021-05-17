import { Component, OnInit } from '@angular/core';
import { PeticionesService } from 'src/app/servicios/peticiones.service';
import { ServicioTienda } from 'src/app/servicios/servicio-tienda.service';

@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.component.html',
  styleUrls: ['./detalles-producto.component.css']
})
export class DetallesProductoComponent implements OnInit {

  constructor(private servicioTienda: ServicioTienda, private peticiones: PeticionesService) { }

  producto: any;

  ngOnInit(): void {
    this.peticiones.getProductoPorID(this.servicioTienda.idProducto)
      .subscribe(
        data => {
          this.producto = data[0]
          this.producto["cantidadProducto"]=0
        },
        error => {
        
        }
      )
  }

  anadirCarrito(producto){
    this.servicioTienda.añadirProducto(producto);
  }

}
