import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServicioTienda } from '../servicios/servicio-tienda.service';

@Component({
  selector: 'app-inyectador',
  templateUrl: './inyectador.component.html',
  styleUrls: ['./inyectador.component.css']
})
export class InyectadorComponent implements OnInit {

  submitted: boolean = false;

  @ViewChild('f', { static: false }) signupForm: NgForm;

  componente = {
    categoria: '',
    marca: '',
    nombre: '',
    descripcion: '',
    cantidad: 0,
    precio: 0
  }

  constructor(private servicioTienda: ServicioTienda) { }

  ngOnInit(): void {
  }

  submit(){
    // this.servicioTienda.nuevoComponente()
    this.submitted = true;
    this.componente.categoria = this.signupForm.value.categoria;
    this.componente.marca = this.signupForm.value.marca;
    this.componente.nombre = this.signupForm.value.nombre;
    this.componente.descripcion = this.signupForm.value.descripcion;
    this.componente.cantidad = this.signupForm.value.cantidad;
    this.componente.precio = this.signupForm.value.precio;

    console.log(this.componente)

    this.signupForm.reset();
  }
}
