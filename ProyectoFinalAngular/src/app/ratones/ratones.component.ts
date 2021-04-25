import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../servicios/peticiones.service';

@Component({
  selector: 'app-ratones',
  templateUrl: './ratones.component.html',
  styleUrls: ['./ratones.component.css']
})
export class RatonesComponent implements OnInit {
  ratones:any;
  constructor(private peticion:PeticionesService) { }

  ngOnInit(): void {
    this.listaRatones();
  }
    

  listaRatones(){
    this.peticion.getRatones().subscribe(data=>{
     console.log(data);
     this.ratones=data;
     console.log(this.ratones);
     
    })
   
  }
}
