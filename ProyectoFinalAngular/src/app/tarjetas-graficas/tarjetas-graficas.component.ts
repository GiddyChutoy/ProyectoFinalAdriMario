import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../servicios/peticiones.service';

@Component({
  selector: 'app-tarjetas-graficas',
  templateUrl: './tarjetas-graficas.component.html',
  styleUrls: ['./tarjetas-graficas.component.css']
})
export class TarjetasGraficasComponent implements OnInit {

  graficas:any;
  constructor(private peticion:PeticionesService) { }

  ngOnInit(): void {
    this.listaGraficas();
  }
  
  
  listaGraficas(){
    this.peticion.getGraficas().subscribe(data=>{
     this.graficas=data;
     console.log(this.graficas);
    })
   
  }
}
