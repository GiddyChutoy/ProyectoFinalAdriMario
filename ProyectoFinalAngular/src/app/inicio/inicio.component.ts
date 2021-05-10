import { Component, OnInit } from '@angular/core';
import { ProductosComponent } from '../productos/productos.component';
import { PeticionesService } from '../servicios/peticiones.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  arrayProductos=JSON.parse(localStorage.getItem('productos'));
  constructor(private peticiones:PeticionesService) { }
  productos:any;
  ngOnInit(): void {
    this.listarProductos();
    console.log(this.arrayProductos);
  }
  listarProductos(){
    this.peticiones.getProductos().subscribe(data=>{
      this.productos=data;
      console.log(this.productos);
    })
  }
  anadirCarrito(producto){
    this.arrayProductos=[...this.arrayProductos]
    this.arrayProductos.push(producto)
    console.log(this.arrayProductos);
    localStorage.setItem('productos',JSON.stringify(this.arrayProductos));
  }
}
