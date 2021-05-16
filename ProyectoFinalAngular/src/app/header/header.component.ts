import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nombreUsuario: string = "";
  rol: string = "";
  
  palabra:string='';
  constructor(private router:Router, public matDialog: MatDialog) { }

  ngOnInit(): void {

    this.nombreUsuario = sessionStorage.getItem('usuario')
    this.rol = sessionStorage.getItem('rol')

  }
  
  recogerDatoBuscador(){

    this.router.navigate(["resultado",this.palabra])
  }

  inyectador(){
    this.router.navigate(["anadir-componente"])
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = false;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(LoginComponent, dialogConfig);
  }

  toPerfilUsuario(){
    this.router.navigate(["perfil"])
  }
  cerrarSesion() {
    sessionStorage.removeItem('usuario')
    sessionStorage.removeItem('rol')
    window.location.replace('http://localhost:4200/inicio')
  }

}
