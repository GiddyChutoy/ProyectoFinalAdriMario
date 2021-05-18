import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PeticionesUsuarioService } from '../servicios/peticiones-usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() registrar: boolean = false;

  formulario:FormGroup
  constructor(private route: ActivatedRoute, private router: Router,private peticioneUsuario:PeticionesUsuarioService,private toastr: ToastrService,public matDialog: MatDialog) { }
  usuario:any;
  ngOnInit(): void {
    this.iniciarForm();
  }

  toRegister(){
       this.registrar = !this.registrar 
  }


  private iniciarForm() {
    this.formulario = new FormGroup({
      'usuario':new FormControl(null,Validators.required),
      'contraseña': new FormControl(null, Validators.required),
  
    });
    
  }

    comprobarLogin(){
      const username=this.formulario.get('usuario').value;
      const contraseña=this.formulario.get('contraseña').value;
     
      this.peticioneUsuario.comprobarLogin(username,contraseña).subscribe(
        data=>{
          this.toastr.info("Has iniciado con exito");
          this.matDialog.closeAll();
          this.peticioneUsuario.getUsuario(username).subscribe(data=>{
            this.usuario=data;
            this.peticioneUsuario.setUserData(data)
            sessionStorage.setItem('usuario', this.usuario.username)
            sessionStorage.setItem('rol', this.usuario.rol)
          })
        },error=>{
          this.toastr.error("usuario y/o contraseña incorrecta");
        }
      )
    }
}
