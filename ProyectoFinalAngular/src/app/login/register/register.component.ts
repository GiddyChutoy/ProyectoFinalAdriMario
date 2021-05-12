import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicioTienda } from 'src/app/servicios/servicio-tienda.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formularioRegister: FormGroup;

  @Output('register') register: EventEmitter<boolean> = new EventEmitter;

  constructor() { }

  toLogIn() {
    this.register.emit(false);
  }

  ngOnInit(): void {
    this.formularioRegister = new FormGroup({
      'username': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'nombre': new FormControl(null, Validators.required),
      'apellidos': new FormControl(null, Validators.required),
      'UserPassword': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
      'direccion': new FormControl(null, Validators.required),
      'fecha_nacimiento': new FormControl(null, Validators.required),
    })
  }

  // metodo para insertar usuararios (se supone que lo ha hecho mariopo)

}
