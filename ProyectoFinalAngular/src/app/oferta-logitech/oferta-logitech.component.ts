import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PeticionesService } from '../servicios/peticiones.service';

@Component({
  selector: 'app-oferta-logitech',
  templateUrl: './oferta-logitech.component.html',
  styleUrls: ['./oferta-logitech.component.css']
})
export class OfertaLogitechComponent implements OnInit {
  productos:any;
  constructor(private peticiones:PeticionesService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.listaProductos();
  }
  listaProductos(){
    this.peticiones.getProductoLogitech().subscribe(data=>
        {
          console.log(data);
          this.productos=data;
        }
      )
  }
  anadirCarrito(producto){
    console.log(producto);
    let arrayProductos=[];
    if(JSON.parse(localStorage.getItem('productos'))==null){
      arrayProductos=[];
    }else{
      arrayProductos=JSON.parse(localStorage.getItem('productos'));
    }
    if(arrayProductos==null || arrayProductos==undefined){
      console.log("entra");
      arrayProductos.push(producto)
    }else{
      arrayProductos=[...arrayProductos]
      arrayProductos.push(producto)
    }
    this.toastr.info("Ha añadido el producto al carrito");
    console.log(arrayProductos);
    localStorage.setItem('productos',JSON.stringify(arrayProductos));
  }
}
