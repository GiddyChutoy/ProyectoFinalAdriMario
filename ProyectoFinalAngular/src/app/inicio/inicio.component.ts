import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductosComponent } from '../productos/productos.component';
import { PeticionesService } from '../servicios/peticiones.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  page=1;
  constructor(private peticiones:PeticionesService,private toastr: ToastrService) { }
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
  anadirCarrito(producto){
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
