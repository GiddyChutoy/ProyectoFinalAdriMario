import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-placas-base',
  templateUrl: './placas-base.component.html',
  styleUrls: ['./placas-base.component.css']
})
export class PlacasBaseComponent implements OnInit {

  componentes: string[] = ["msi", "asus", "aorus"];

  constructor() { }

  ngOnInit(): void {
  }

}
