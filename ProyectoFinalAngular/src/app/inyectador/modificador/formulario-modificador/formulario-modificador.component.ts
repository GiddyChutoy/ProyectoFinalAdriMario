import { Component, OnInit } from '@angular/core';
import { PeticionesService } from 'src/app/servicios/peticiones.service';

@Component({
  selector: 'app-formulario-modificador',
  templateUrl: './formulario-modificador.component.html',
  styleUrls: ['./formulario-modificador.component.css']
})
export class FormularioModificadorComponent implements OnInit {

  producto: any = {};

  constructor(private peticiones: PeticionesService) { }

  ngOnInit(): void {
    this.peticiones.getProductoPorID(localStorage.getItem("productoId"))
      .subscribe(
        data => {
          this.producto = data[0];          
        },
        error => {
          console.error(error); 
        }
      )
  }

}
