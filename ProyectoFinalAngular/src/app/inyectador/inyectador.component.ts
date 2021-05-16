import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PeticionesService } from '../servicios/peticiones.service';

@Component({
  selector: 'app-inyectador',
  templateUrl: './inyectador.component.html',
  styleUrls: ['./inyectador.component.css']
})
export class InyectadorComponent implements OnInit {
  //params
  url:any
  formulario: FormGroup;
  marcas:any;
  tipos:any;
  fileToUpload: File = null;

  constructor(private http: HttpClient, private router: Router,private peticiones:PeticionesService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.iniciarForm();
    this.getMarcas();
    this.getTipos();
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
         this.toastr.info("Se ha añadido con exito el producto")
        },
        error => {
          this.toastr.error("No se ha podido añadir el producto contacte con administrador")
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
  private getMarcas(){
    this.peticiones.getMarcas().subscribe(
       data=>{
         this.marcas=data;
       }
     );
    }
    private getTipos(){
      this.peticiones.getCategorias().subscribe(
        data=>{
          this.tipos=data;
        }
      )
    }
}
