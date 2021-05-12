import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ServicioTienda } from '../servicios/servicio-tienda.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() registrar: boolean = false;

  formulairoLogIn: FormGroup;

  constructor(public matDialog: MatDialog) { }

  ngOnInit(): void {

    this.formulairoLogIn = new FormGroup({
      'usuario': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    })

  }

  toRegister(){
       this.registrar = !this.registrar 
  }
}
