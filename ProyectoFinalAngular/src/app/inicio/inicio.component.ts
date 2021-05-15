import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PeticionesService } from '../servicios/peticiones.service';
import { ServicioTienda } from '../servicios/servicio-tienda.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

 
  constructor(private peticiones:PeticionesService,
    private toastr: ToastrService,
    private router: Router,
    private servicioTienda: ServicioTienda) { }
  page=1;
  productos:any;
  ngOnInit(): void {
    this.listarProductos();
  }
  listarProductos(){
    this.peticiones.getProductos().subscribe(data=>{
      this.productos=data;
      this.productos.map(el=>{
        el['cantidadProducto']=1;
      })
      console.log(this.productos);
    })
  }
  anadirCarrito(producto){
    this.servicioTienda.añadirProducto(producto);
    this.toastr.info("Has añadido este producto al carrito");
  }

  verDetalles(id){
    this.servicioTienda.guardarIdProducto(id);
    console.log(id)
    this.router.navigate(['/detalles-producto'])
  }

}
