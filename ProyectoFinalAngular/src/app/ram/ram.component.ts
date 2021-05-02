import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeticionesService } from '../servicios/peticiones.service';

@Component({
  selector: 'app-ram',
  templateUrl: './ram.component.html',
  styleUrls: ['./ram.component.css']
})
export class RamComponent implements OnInit {

  constructor(private route:ActivatedRoute,private peticiones:PeticionesService) { }
  tipo:string;
  rams:any;
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.tipo = params['tipo'];
      console.log(this.tipo);
    })
    this.listaRAM();
  }

  listaRAM(){
    this.peticiones.getRAM(this.tipo).subscribe(data=>
        {
          console.log(data);
          this.rams=data;
        }
      )
  }

}
