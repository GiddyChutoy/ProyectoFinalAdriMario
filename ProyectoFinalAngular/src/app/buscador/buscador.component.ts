import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PeticionesService } from '../servicios/peticiones.service';
import { ServicioTienda } from '../servicios/servicio-tienda.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  busqueda:string ='';
  formulario:FormGroup
  page=1;
  constructor(private route:ActivatedRoute,private peticionesServicios:PeticionesService,private servicioTienda: ServicioTienda) { }
  productos:any;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.busqueda = params.get('busqueda');
      this.listaProductos(); 
    })  
   }
  listaProductos(){
    this.peticionesServicios.getProductosBuscador(this.busqueda).subscribe(data=>{
      this.productos=data;
      console.log(this.productos);
      this.productos.map(el=>{
        el['cantidadProducto']=1;
      })
    })
  }
  anadirCarrito(producto){
    this.servicioTienda.añadirProducto(producto);
  }
}
