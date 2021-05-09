import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PeticionesService } from 'src/app/servicios/peticiones.service';

@Component({
  selector: 'app-modificador',
  templateUrl: './modificador.component.html',
  styleUrls: ['./modificador.component.css']
})
export class ModificadorComponent implements OnInit ,OnChanges{

  formulario: FormGroup;
  productos: any = [];

  constructor(private router: Router, private peticiones: PeticionesService, private http: HttpClient) { }
  
  ngOnChanges(changes: SimpleChanges): void {
   
   
   if(changes.productos){
    this.peticiones.getProductos()
    .subscribe(
      data => {
        this.productos =[...data];
        // console.log(data)
      },
      error => {
       
      }
    )
   }
  }

  ngOnInit(): void {

    this.peticiones.getProductos()
      .subscribe(
        data => {
          this.productos =[...data];
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
 borrarProducto(id){
   
    this.peticiones.deleteProducto(id).subscribe(data=>{
      console.log(data);
    })
 }
}
