import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private peticiones:PeticionesService,private toastr: ToastrService, private servicioTienda: ServicioTienda,private router: Router) { }
  page=1;
  ngOnInit(): void {
    this.listaProductos();
  }
  listaProductos(){
    this.peticiones.getProductoLogitech().subscribe(data=>
        {
          this.productos=data;
          this.productos.map(el=>{
            el['cantidadProducto']=1;
          })
        }
      )
  }
  anadirCarrito(producto){
    this.servicioTienda.añadirProducto(producto);
  }
  verDetalles(id){
    this.servicioTienda.guardarIdProducto(id);
    this.router.navigate(['/detalles-producto'])
  }
}
