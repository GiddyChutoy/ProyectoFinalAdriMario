import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inyectador',
  templateUrl: './inyectador.component.html',
  styleUrls: ['./inyectador.component.css']
})
export class InyectadorComponent implements OnInit {
  url:any
  formulario: FormGroup;
  fileToUpload: File = null;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.iniciarForm();
  }

  private iniciarForm() {
    this.formulario = new FormGroup({
      'tipo': new FormControl(null, Validators.required),
      'marca': new FormControl(null, Validators.required),
      'nombre': new FormControl(null, Validators.required),
      'descripcion': new FormControl(null, Validators.required),
      'cantidad': new FormControl(null, Validators.required),
      'precio': new FormControl(null, Validators.required),
      'imagen': new FormControl(null),
    });
  }

  toModificar() {
    this.router.navigate(["modificador"])
  }

  submit() {
    const formData = new FormData();
    let data={
      tipo: this.formulario.get('tipo').value,
      marca:this.formulario.get('marca').value,
      nombre:this.formulario.get('nombre').value,
      descripcion:this.formulario.get('descripcion').value,
      cantidad:this.formulario.get('cantidad').value,
      precio :this.formulario.get('precio').value
    }
    console.log(this.formulario.get('imagen').value);
    formData.append('file',this.formulario.get('imagen').value);//este es el input que recoge el la imagen file
    formData.append('request', new Blob([JSON.stringify(data)], { type: 'application/json' }))
    this.http.post("http://localhost:8080/ardkalic/productos/anadir", formData, { responseType: 'text' })
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
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.formulario.get('imagen').setValue(file);
    }
    //para mostrar la imagen que sube en pantalla
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.url = (<FileReader>event.target).result;
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
