import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PeticionesService } from 'src/app/servicios/peticiones.service';

@Component({
  selector: 'app-modificador',
  templateUrl: './modificador.component.html',
  styleUrls: ['./modificador.component.css']
})
export class ModificadorComponent implements OnInit {
  idProducto:any;
  formulario: FormGroup;
  productos: any = [];
  page=1;
  constructor(private router: Router, private peticiones: PeticionesService, private http: HttpClient,private toastr: ToastrService) { }
  
  

  ngOnInit(): void {

    this.getProductos();
  }

  private getProductos() {
    this.peticiones.getProductos()
      .subscribe(
        data => {
          this.productos = [...data];
        },
        error => {
  
        }
      );
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
      this.getProductos();
  },error=>{
    this.toastr.error("No se ha podido eliminar el producto");
  })
  this.toastr.info("Se ha eliminado el producto con exito");
 }
}
