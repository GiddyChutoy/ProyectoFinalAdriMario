import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { DialogoConfirmacionComponent } from 'src/app/modal/dialogo-confirmacion/dialogo-confirmacion.component';
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
  
  constructor(private peticionUsuario: PeticionesUsuarioService,private route:ActivatedRoute,private router:Router,public matDialog: MatDialog,private toastr:ToastrService) { }
  
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
        this.formulario.get('nombre').setValue(this.usuario.nombre);
        this.formulario.get('apellidos').setValue(this.usuario.apellidos);
        this.formulario.get('contraseña').setValue(this.usuario.userPassword);
        this.formulario.get('direccion').setValue(this.usuario.direccion);
        this.formulario.get('nacimiento').setValue(this.usuario.nacimiento);
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
      data=>{
        this.toastr.info("Has modificado tus datos con éxito")
        this.router.navigate(['perfil'])
      }
    )
  }
  mostrarDialogo(): void {
    this.matDialog
      .open(DialogoConfirmacionComponent, {
        data: `¿Estas seguro de querer darte de baja?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.bajaUsuario();
          this.toastr.info("Te has dado de baja correctamente")
        } else {
          this.toastr.warning("Debes aceptar para darte de baja");
        }
      });
  }
  bajaUsuario(){
    this.peticionUsuario.deleteUsuario(this.usuario.username).subscribe(()=>{});
    sessionStorage.removeItem('usuario')
    sessionStorage.removeItem('rol')
    this.peticionUsuario.setUserData({
      nombre:'',
      rol:''
    })
   this.router.navigate(['/'])
  }

  limpiarFormulario(){
    this.formulario.reset();
  }

 
}
