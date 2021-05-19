import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { PeticionesUsuarioService } from '../servicios/peticiones-usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nombreUsuario: string = "";
  rol: string = "";
  
  palabra:string='';
  constructor(private router:Router, public matDialog: MatDialog,private peticionUsuario:PeticionesUsuarioService) {
   
   }

  ngOnInit(): void {
    this.peticionUsuario.getUserData().subscribe(
      data=>{
        this.nombreUsuario=data.username
        this.rol=data.rol
      }
    )
    this.nombreUsuario=sessionStorage.getItem('usuario')!==null?sessionStorage.getItem('usuario'):''
    this.rol=sessionStorage.getItem('rol')!==null?sessionStorage.getItem('rol'):''
  }

  recogerDatoBuscador(){
    this.router.navigate(["resultado",this.palabra])
  }

  inyectador(){
    this.router.navigate(["anadir-componente"])
  }
 
  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    const modalDialog = this.matDialog.open(LoginComponent, dialogConfig);
  }

  toPerfilUsuario(){
    this.router.navigate(["perfil"])
  }
  cerrarSesion() {
    sessionStorage.removeItem('usuario')
    sessionStorage.removeItem('rol')
    this.nombreUsuario='';
    this.rol='';
    this.router.navigate(['inicio']);
  }

}
