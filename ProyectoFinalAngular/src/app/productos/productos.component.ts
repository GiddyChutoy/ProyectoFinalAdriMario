import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PeticionesService } from '../servicios/peticiones.service';
import { ServicioTienda } from '../servicios/servicio-tienda.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private route:ActivatedRoute,private peticiones:PeticionesService,private router:Router, private servicioTienda: ServicioTienda) { }
  
  tipo:string;
  productos:any;
  marcas: any;
  
  page = 1;
  precioMaximo: number = 10000;
  marcaFiltrada: string = "Todas las marcas";

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.tipo = params.get('tipo');
      this.listaProductos(this.tipo);
      this.listaMarcas();
    })
  }
  listaProductos(tipo){
    this.peticiones.getProductosTipo(tipo).subscribe(data=>
        {
          this.productos=data;
          this.productos.map(el=>{
            el['cantidadProducto']=1;
          })
        }
      )
  }
  listaMarcas(){
    this.peticiones.getMarcas()
      .subscribe(
        data => {
          this.marcas = data
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
