import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  formulario:FormGroup
  constructor(private http: HttpClient,private toastr: ToastrService){}
  ngOnInit(): void {
    this.iniciarForm();
  }
  onSubmit() {
    if (this.formulario.valid) {
     
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/xjvjybzl',
        { name: this.formulario.get('nombre'), replyto: this.formulario.get('email'), message: this.formulario.get('messages') },
        { 'headers': headers }).subscribe(
          response => {
           
          }
        );
    }
    this.toastr.info("Su mensaje ha sido recibido con exito un admin contactara proximamente")
    this.formulario.reset();
  }
  private iniciarForm() {
    this.formulario = new FormGroup({
      'nombre': new FormControl(null, Validators.required),
      'messages': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
    });
  }
}