import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PeticionesService } from '../servicios/peticiones.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private route:ActivatedRoute,private peticiones:PeticionesService,private router:Router,private toastr: ToastrService) { }
  
  tipo:string;
  productos:any;
  page = 1;
  precioMaximo: number = 10000;
  marcaFiltrada: string = "Todas las marcas";

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.tipo = params.get('tipo');
      this.listaProductos(this.tipo);
    })
  }
  listaProductos(tipo){
    this.peticiones.getProductosTipo(tipo).subscribe(data=>
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
