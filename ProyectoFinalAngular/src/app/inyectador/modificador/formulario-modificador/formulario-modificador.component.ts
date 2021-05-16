import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PeticionesService } from 'src/app/servicios/peticiones.service';

@Component({
  selector: 'app-formulario-modificador',
  templateUrl: './formulario-modificador.component.html',
  styleUrls: ['./formulario-modificador.component.css']
})
export class FormularioModificadorComponent implements OnInit {
  formulario: FormGroup;
  producto: any = {};
  url:any;
  marcas:any;
  tipos:any;
  constructor(private peticiones: PeticionesService,private http: HttpClient,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getMarcas();
    this.getTipos();
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
          this.formulario.get('imagen').setValue(data[0].imagen);
          console.log("valor imagen",this.formulario.get('imagen').setValue(data[0].imagen))
          this.url = 'data:image/png;base64,'+this.formulario.get('imagen').value
        },
        error => {
          console.error(error);
        }
      );
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.formulario.get('fichero').setValue(file);
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
      precio :this.formulario.get('precio').value,
      imagen:this.formulario.get('imagen').value
    }
    console.log(data);
    console.log(this.formulario.get('imagen').value);
    formData.append('file',this.formulario.get('fichero').value);//este es el input que recoge el la imagen file
    formData.append('request', new Blob([JSON.stringify(data)], { type: 'application/json' }))
    this.http.put("http://localhost:8080/ardkalic/productos/modificar", formData, { responseType: 'text' })
      .subscribe(
        data => {
          this.toastr.info("Se ha modificado el producto con exito");
          setTimeout(() => {
            window.location.reload()
          }, 1000);
        },
        error => {
          this.toastr.error("No se ha podido modificar el producto ");
        }
      )
     
      
  }
  private iniciarForm() {
    this.formulario = new FormGroup({
      'id':new FormControl(null),
      'tipo': new FormControl(null, Validators.required),
      'marca': new FormControl(null, Validators.required),
      'nombre': new FormControl(null, [Validators.minLength(1), Validators.required]),
      'descripcion': new FormControl(null, [Validators.minLength(1), Validators.required]),
      'cantidad': new FormControl(null, [Validators.minLength(1), Validators.required,Validators.min(0)]),
      'precio': new FormControl(null, [Validators.minLength(1), Validators.required,Validators.min(0)]),
      'imagen': new FormControl(null, Validators.minLength(1)),
      'fichero':new FormControl(null)
    });
    
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
