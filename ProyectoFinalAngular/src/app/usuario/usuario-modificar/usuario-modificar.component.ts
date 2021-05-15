import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PeticionesUsuarioService } from 'src/app/servicios/peticiones-usuario.service';

@Component({
  selector: 'app-usuario-modificar',
  templateUrl: './usuario-modificar.component.html',
  styleUrls: ['./usuario-modificar.component.css']
})
export class UsuarioModificarComponent implements OnInit {

  formulario: FormGroup
  usuario: any = {}

  constructor(private peticionUsario: PeticionesUsuarioService) { }

  ngOnInit(): void {

    this.peticionUsario.getUsuario(sessionStorage.getItem('usuario'))
      .subscribe(data => {
        this.usuario = data
        console.log(this.usuario)
      })

    //No me rellena el formulario el objeto usaurio por algún motivo

    this.formulario = new FormGroup({
      'username':new FormControl("barras", Validators.required),
      'nombre': new FormControl(this.usuario.nombre, Validators.required),
      'apellidos': new FormControl(this.usuario.apellidos, Validators.required),
      'contraseña': new FormControl(this.usuario.user_password, [Validators.required]),
      'email': new FormControl(this.usuario.email, [Validators.required,Validators.email]),
      'direccion': new FormControl(this.usuario.direccion, [ Validators.required]),
      'nacimiento': new FormControl(this.usuario.fecha_nacimiento, [ Validators.required]),
    })
  }

  modificarUsuario(){

  }

  limpiarFormulario(){
    this.formulario.reset();
  }

}
