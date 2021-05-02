import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PeticionesService } from '../servicios/peticiones.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  busqueda:string ='';
  formulario:FormGroup
  constructor(private route:ActivatedRoute,private peticionesServicios:PeticionesService) { }
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
    })
  }
}
