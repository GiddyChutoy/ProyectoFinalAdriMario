import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
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
  }
  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      console.log(contactForm.valid);
      const email = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/xjvjybzl',
        { name: email.name, replyto: email.email, message: email.messages },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
          }
        );
    }
    this.toastr.info("Su mensaje ha sido recibido con exito un admin contactara proximamente")
    contactForm.reset();
  }
  
}