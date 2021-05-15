import { Component, OnInit } from '@angular/core';
import { ServicioTienda } from '../servicios/servicio-tienda.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  productos:any
  precioTotal:any
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

  limpiarCarrito(){
    sessionStorage.removeItem('productos');
    this.productos=[];
  }

  anadirProducto(producto){
    const index=this.productos.findIndex(el=> el.id === producto.id);
    this.productos[index].cantidadProducto = this.productos[index].cantidadProducto + 1;
  }
  quitarProducto(producto){
    const index=this.productos.findIndex(el=> el.id === producto.id);
    this.productos[index].cantidadProducto = this.productos[index].cantidadProducto + -1;
  }
  completarCompra(){
    
    this.servicioTienda.sendListaCompra(this.productos).subscribe(
      data=>{
        this.precioTotal=data;
      }
    )
  }
}
