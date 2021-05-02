import { Component, OnInit } from '@angular/core';
import { ServicioTienda } from '../shared/servicio-tienda.service';

@Component({
  selector: 'app-placas-base',
  templateUrl: './placas-base.component.html',
  styleUrls: ['./placas-base.component.css']
})
export class PlacasBaseComponent implements OnInit {

  componentes: string[] = ["msi", "asus", "aorus"];

  constructor(private servicioTienda: ServicioTienda) { }

  ngOnInit(): void {
  }

  comprar(idProducto){
    this.servicioTienda.comprarComponente(idProducto)
  }

}
