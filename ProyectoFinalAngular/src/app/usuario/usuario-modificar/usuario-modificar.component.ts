import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PeticionesUsuarioService } from 'src/app/servicios/peticiones-usuario.service';

@Component({
  selector: 'app-usuario-modificar',
  templateUrl: './usuario-modificar.component.html',
  styleUrls: ['./usuario-modificar.component.css']
})
export class UsuarioModificarComponent implements OnInit {
  nombreUser:any;
  formulario: FormGroup
  usuario:any ;
  constructor(private peticionUsuario: PeticionesUsuarioService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.getUsuario();
    this.iniciarForm();
   
  }

  private getUsuario() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.nombreUser = params.get('username');
    })  
    this.peticionUsuario.getUsuario(this.nombreUser)
      .subscribe(data => {
        this.usuario = data;
        this.formulario.get('username').setValue(this.usuario.username);
        this.formulario.get('email').setValue(this.usuario.email);
      });
  }

  private iniciarForm() {
    this.formulario = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'nombre': new FormControl(null, Validators.required),
      'apellidos': new FormControl(null, Validators.required),
      'contraseña': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'direccion': new FormControl(null, [Validators.required]),
      'nacimiento': new FormControl(null, [Validators.required]),
    });
  }

  modificarUsuario(){
    const usuario={
      username:this.formulario.get('username').value,
      nombre: this.formulario.get('nombre').value,
      apellidos: this.formulario.get('apellidos').value,
      userPassword: this.formulario.get('contraseña').value,
      email: this.formulario.get('email').value,
      direccion: this.formulario.get('direccion').value,
      fecha_nacimiento: this.formulario.get('nacimiento').value,
      rol:this.usuario.rol
    }
    this.peticionUsuario.putUsuario(usuario).subscribe(
      data=>{}
    )
  }

  bajaUsuario(){
    this.peticionUsuario.deleteUsuario(this.usuario.username);
  }

  limpiarFormulario(){
    this.formulario.reset();
  }

}
