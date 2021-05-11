import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  productos:any
  productosCarrito=[];
  arrayCantidad=[];
  constructor() { }

  ngOnInit(): void {
    this.copiarProductos();
  }
  copiarProductos(){
    this.productos=JSON.parse(localStorage.getItem('productos'));
    console.log(this.productos);
    
    this.productos.forEach(element => {
      console.log("elemento",element.id)
      if(this.productosCarrito.indexOf(element.tipo)===-1) {
        console.log("entra");
        this.productosCarrito.push(element);
      }
    });
      console.log(this.productosCarrito)

  }
}
