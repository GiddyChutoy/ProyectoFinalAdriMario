import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  productos:any
  constructor() { }

  ngOnInit(): void {
    this.copiarProductos();
  }
  copiarProductos(){
    this.productos=JSON.parse(localStorage.getItem('productos'));
    console.log(this.productos);
    
  }
}
