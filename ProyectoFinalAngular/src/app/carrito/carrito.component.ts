import { Component, OnInit } from '@angular/core';
import { ServicioTienda } from '../servicios/servicio-tienda.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  productos:any
  constructor(private servicioTienda:ServicioTienda) { }

  ngOnInit(): void {
   this.copiarProductos();
  }
  copiarProductos(){
    // this.servicioTienda.getProducto().subscribe(resultado=>{
    //   this.productos=resultado;
    // })
    this.productos=JSON.parse(sessionStorage.getItem('productos'));
    console.log(this.productos);
    
   
    

  }
}
