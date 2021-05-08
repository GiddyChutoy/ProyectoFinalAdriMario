import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inyectador',
  templateUrl: './inyectador.component.html',
  styleUrls: ['./inyectador.component.css']
})
export class InyectadorComponent implements OnInit {

  formulario: FormGroup;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      'tipo': new FormControl(),
      'marca': new FormControl(),
      'nombre': new FormControl(),
      'descripcion': new FormControl(),
      'cantidad': new FormControl(),
      'precio': new FormControl()
    });
  }

  toModificar() {
    this.router.navigate(["modificador"])
  }

  submit() {
    console.log(this.formulario.value);
    this.http.post("http://localhost:8080/ardkalic/productos/anadir", this.formulario.value, { responseType: 'text' })
      .subscribe(
        data => {
          console.log("************")
          console.log(data)
        },
        error => {
          console.log(error)
        }
      )
        this.formulario.reset();
  }
}
