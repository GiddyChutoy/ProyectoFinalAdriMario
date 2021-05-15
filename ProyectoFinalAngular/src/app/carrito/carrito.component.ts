import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ServicioTienda } from '../servicios/servicio-tienda.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  productos:any
  precioTotal:any
  constructor(private servicioTienda:ServicioTienda,public matDialog: MatDialog) { }

  ngOnInit(): void {
   this.listarProductos();

  }
  listarProductos(){
   
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
    sessionStorage.setItem('productos', JSON.stringify(this.productos));
  }
  quitarProducto(producto){
    const index=this.productos.findIndex(el=> el.id === producto.id);
    if(this.productos[index].cantidadProducto > 1){
      this.productos[index].cantidadProducto = this.productos[index].cantidadProducto - 1;
    }else{
      this.productos.splice(index,1);
    }
    sessionStorage.setItem('productos', JSON.stringify(this.productos));
  }
  completarCompra(){
    
    this.servicioTienda.sendListaCompra(this.productos).subscribe(
      data=>{
        this.precioTotal=data;
      }
    )
    sessionStorage.removeItem('productos');
   
  }
  
}
