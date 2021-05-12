import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PeticionesService } from '../servicios/peticiones.service';
import { ServicioTienda } from '../servicios/servicio-tienda.service';

@Component({
  selector: 'app-oferta-logitech',
  templateUrl: './oferta-logitech.component.html',
  styleUrls: ['./oferta-logitech.component.css']
})
export class OfertaLogitechComponent implements OnInit {
  productos:any;
  constructor(private peticiones:PeticionesService,private toastr: ToastrService, private servicioTienda: ServicioTienda) { }

  ngOnInit(): void {
    this.listaProductos();
  }
  listaProductos(){
    this.peticiones.getProductoLogitech().subscribe(data=>
        {
          console.log(data);
          this.productos=data;
        }
      )
  }
  anadirCarrito(producto){
    this.servicioTienda.añadirProducto(producto);
  }
}
