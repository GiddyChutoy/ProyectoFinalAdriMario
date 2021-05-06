import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../servicios/peticiones.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private peticiones:PeticionesService) { }
  productos:any;
  ngOnInit(): void {
    this.listarProductos();
  }
  listarProductos(){
    this.peticiones.getProductos().subscribe(data=>{
      this.productos=data;
      console.log(this.productos);
    })
  }
}
