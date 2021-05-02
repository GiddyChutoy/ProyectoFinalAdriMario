import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicioTienda } from '../servicios/servicio-tienda.service';

@Component({
  selector: 'app-inyectador',
  templateUrl: './inyectador.component.html',
  styleUrls: ['./inyectador.component.css']
})
export class InyectadorComponent implements OnInit {

  
  submitted: boolean = false;

  formulario:FormGroup;

  // componente = {
  //   tipo: '',
  //   marca: '',
  //   nombre: '',
  //   descripcion: '',
  //   cantidad: 0,
  //   precio: 0
  // }

  constructor(private servicioTienda: ServicioTienda) { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      'tipo': new FormControl(),
      'marca': new FormControl(),
      'nombre': new FormControl(),
      'descripcion': new FormControl(),
      'cantidad': new FormControl(),
      'precio': new FormControl()
    });
  }

  submit(){
    // this.servicioTienda.nuevoComponente()

    console.log(this.formulario.get('tipo'))
    // this.submitted = true;
    // this.componente.tipo = this.signupForm.value.tipo;
    // this.componente.marca = this.signupForm.value.marca;
    // this.componente.nombre = this.signupForm.value.nombre;
    // this.componente.descripcion = this.signupForm.value.descripcion;
    // this.componente.cantidad = this.signupForm.value.cantidad;
    // this.componente.precio = this.signupForm.value.precio;

    // console.log(this.componente)

}
}
