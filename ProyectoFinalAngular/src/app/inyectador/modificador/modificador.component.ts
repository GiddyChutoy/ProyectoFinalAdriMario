import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PeticionesService } from 'src/app/servicios/peticiones.service';

@Component({
  selector: 'app-modificador',
  templateUrl: './modificador.component.html',
  styleUrls: ['./modificador.component.css']
})
export class ModificadorComponent implements OnInit {

  formulario: FormGroup;
  productos: any = [];

  constructor(private router: Router, private peticiones: PeticionesService, private http: HttpClient) { }

  ngOnInit(): void {

    this.peticiones.getProductos()
      .subscribe(
        data => {
          this.productos = data;
          // console.log(data)
        },
        error => {
          console.error(error); 
        }
      )
  }

  toFomularioModificador(productoId) {
    localStorage.setItem("productoId", productoId)
    this.router.navigate(["formularioModificador"])
  }

  toInyectador() {
    this.router.navigate(["anadir-componente"])
  }

}
