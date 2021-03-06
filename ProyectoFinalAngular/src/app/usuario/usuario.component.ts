import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeticionesUsuarioService } from '../servicios/peticiones-usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  listaVisible: boolean = true;
  usuario: any = {};

  constructor(private peticionUsuario: PeticionesUsuarioService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.peticionUsuario.getUsuario(sessionStorage.getItem('usuario'))
      .subscribe(data => {
        this.usuario = data;
      })
  }

  toModificarUsuario(){
    this.listaVisible = false;
    this.router.navigate(["usuario/",this.usuario.username])
  
  }

  
  
}
