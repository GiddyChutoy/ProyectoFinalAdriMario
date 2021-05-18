import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DialogoConfirmacionComponent } from 'src/app/modal/dialogo-confirmacion/dialogo-confirmacion.component';
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
  constructor(private router: Router, private peticiones: PeticionesService, private http: HttpClient,private toastr: ToastrService,public matDialog: MatDialog) { }
  
  

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

  this.matDialog
  .open(DialogoConfirmacionComponent, {
    data: `¿Esta seguro de borrar el producto? ` 
  })
  .afterClosed()
  .subscribe((confirmado: Boolean) => {
    if (confirmado) {
      this.toastr.info("Se ha eliminado el producto con exito");
      this.peticiones.deleteProducto(id).subscribe(data=>{
      },error=>{
        this.toastr.error("No se ha podido eliminar el producto");
      })
    } 
  });
 
}
 
}
