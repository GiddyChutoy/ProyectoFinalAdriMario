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
          console.log(data);
          this.productos=data;
        }
      )
  }
  listaMarcas(){
    this.peticiones.getMarcas()
      .subscribe(
        data => {
          console.log('marcas')
          console.log(data)
          this.marcas = data
        }
      )
  }
  anadirCarrito(producto){
    this.servicioTienda.añadirProducto(producto);
  }

  verDetalles(id){
    this.servicioTienda.guardarIdProducto(id);
    console.log(id)
    this.router.navigate(['/detalles-producto'])
  }
}
