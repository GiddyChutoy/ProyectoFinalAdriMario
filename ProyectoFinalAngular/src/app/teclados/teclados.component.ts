import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../servicios/peticiones.service';

@Component({
  selector: 'app-teclados',
  templateUrl: './teclados.component.html',
  styleUrls: ['./teclados.component.css']
})
export class TecladosComponent implements OnInit {
  teclados:any;
  constructor(private peticion:PeticionesService) { }

  ngOnInit(): void {
    this.listaTeclados();
  }
  
  
  listaTeclados(){
    this.peticion.getTeclados().subscribe(data=>{
     this.teclados=data;
     console.log(this.teclados);
    })
   
  }
}
