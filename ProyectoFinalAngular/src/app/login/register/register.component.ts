import { Component, OnInit } from '@angular/core';
import { PeticionesUsuarioService } from 'src/app/servicios/peticiones-usuario.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formulario:FormGroup
  constructor(private peticionesUsuario:PeticionesUsuarioService,private toastr: ToastrService,public matDialog: MatDialog) { }

  ngOnInit(): void {
    this.iniciarForm();
  }

  anadirUsuario(){
    const datos={
      username:this.formulario.get('username').value,
      nombre:this.formulario.get('nombre').value,
      apellidos:this.formulario.get('apellidos').value,
      userPassword:this.formulario.get('contraseña').value,
      email:this.formulario.get('email').value,
      direccion:this.formulario.get('direccion').value,
      fecha_nacimiento:this.formulario.get('nacimiento').value
    }
    console.log(datos);
    this.peticionesUsuario.postUsuarios(datos).subscribe(
      data=>{
        this.toastr.info("Has sido registrado con exito");
        this.matDialog.closeAll();
      },
      error=>{
        console.error(error);
        this.toastr.error("Tu usuario o correo ya estan registrados");
        
      }
      
      )
    this.formulario.reset();
  }
  limpiarFormulario(){
    this.formulario.reset();
  }
  private iniciarForm() {
    this.formulario = new FormGroup({
      'username':new FormControl(null,Validators.required),
      'nombre': new FormControl(null, Validators.required),
      'apellidos': new FormControl(null, Validators.required),
      'contraseña': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required,Validators.email]),
      'direccion': new FormControl(null, [ Validators.required]),
      'nacimiento': new FormControl(null, [ Validators.required]),
    });
    
  }
}
