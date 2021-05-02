import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PeticionesService } from '../servicios/peticiones.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private route:ActivatedRoute,private peticiones:PeticionesService,private router:Router) { }
  
  tipo:string;
  productos:any;
  
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.tipo = params.get('tipo');
      this.listaProductos(this.tipo);
    })
  }
  listaProductos(tipo){
    this.peticiones.getRAM(tipo).subscribe(data=>
        {
          console.log(data);
          this.productos=data;
        }
      )
  }
}
