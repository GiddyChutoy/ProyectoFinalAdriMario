import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PeticionesService } from 'src/app/servicios/peticiones.service';

@Component({
  selector: 'app-formulario-modificador',
  templateUrl: './formulario-modificador.component.html',
  styleUrls: ['./formulario-modificador.component.css']
})
export class FormularioModificadorComponent implements OnInit {
  formulario: FormGroup;
  producto: any = {};
  url:any
  constructor(private peticiones: PeticionesService,private http: HttpClient) { }

  ngOnInit(): void {
    
    this.listarProductos();
    this.iniciarForm();
  }
  private listarProductos() {
    this.peticiones.getProductoPorID(localStorage.getItem("productoId"))
      .subscribe(
        data => {
          this.producto = data[0];
          this.formulario.get('id').setValue(data[0].id);
          this.formulario.get('tipo').setValue(data[0].tipo);
          this.formulario.get('marca').setValue(data[0].marca);
          this.formulario.get('nombre').setValue(data[0].nombre);
          this.formulario.get('descripcion').setValue(data[0].descripcion);
          this.formulario.get('cantidad').setValue(data[0].cantidad);
          this.formulario.get('precio').setValue(data[0].precio);
        },
        error => {
          console.error(error);
        }
      );
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
  submit() {
    const formData = new FormData();
    let data={
      id:this.formulario.get('id').value,
      tipo: this.formulario.get('tipo').value,
      marca:this.formulario.get('marca').value,
      nombre:this.formulario.get('nombre').value,
      descripcion:this.formulario.get('descripcion').value,
      cantidad:this.formulario.get('cantidad').value,
      precio :this.formulario.get('precio').value
    }
    console.log("datos envio",data);
    console.log(this.formulario.get('imagen').value);
    formData.append('file',this.formulario.get('imagen').value);//este es el input que recoge el la imagen file
    formData.append('request', new Blob([JSON.stringify(data)], { type: 'application/json' }))
    this.http.put("http://localhost:8080/ardkalic/productos/modificar", formData, { responseType: 'text' })
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
  private iniciarForm() {
    this.formulario = new FormGroup({
      'id':new FormControl(),
      'tipo': new FormControl(),
      'marca': new FormControl(),
      'nombre': new FormControl(),
      'descripcion': new FormControl(),
      'cantidad': new FormControl(),
      'precio': new FormControl(),
      'imagen': new FormControl(),
    });
    
  }
}
