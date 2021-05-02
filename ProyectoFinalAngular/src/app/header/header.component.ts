import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  palabra:string='';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  recogerDatoBuscador(){
    console.log(this.palabra);

    this.router.navigate(["resultado",this.palabra])
  }

  inyectador(){
    this.router.navigate(["anadir-componente"])
  }
}
