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

  limpiarCarrito(){
    sessionStorage.removeItem('productos');
    this.productos=[];
  }

  completarCompra(productoCompra){
    console.log(productoCompra);
    let items=[];
    
    productoCompra.forEach(element => {
      let item={
        id:element.id,
        cantidadProducto:element.cantidadProducto,
        precio:element.precio
      }
      items.push(item);
    });
    console.log("listaCompra",items);
    this.servicioTienda.sendListaCompra(items).subscribe(
      data=>{
        console.log(data);
      }
    )
  }
}
