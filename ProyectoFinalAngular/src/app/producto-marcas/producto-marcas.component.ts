import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PeticionesService } from '../servicios/peticiones.service';
import { ServicioTienda } from '../servicios/servicio-tienda.service';

@Component({
  selector: 'app-producto-marcas',
  templateUrl: './producto-marcas.component.html',
  styleUrls: ['./producto-marcas.component.css']
})
export class ProductoMarcasComponent implements OnInit {

  productos:any;
  marca:any;
  constructor(private peticiones:PeticionesService,private toastr: ToastrService, private servicioTienda: ServicioTienda,private router: Router,private route:ActivatedRoute) { }
  page=1;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.marca = params.get('marca');
      this.listaProductos(); 
    })  
    this.listaProductos();
  }
  listaProductos(){
    this.peticiones.getProductoMarca(this.marca).subscribe(data=>
        {
          this.productos=data;
          this.productos.map(el=>{
            el['cantidadProducto']=1;
          })
        }
      )
  }
  anadirCarrito(producto){
    this.servicioTienda.añadirProducto(producto);
  }
  verDetalles(id){
    this.servicioTienda.guardarIdProducto(id);
    this.router.navigate(['/detalles-producto'])
  }

}
