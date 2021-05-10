
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1150/400`);
  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  irLogitech(){
    this.router.navigate(["logitech"]);
  }
}
