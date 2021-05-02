import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './header/about-us/about-us.component';
import { ContactUsComponent } from './header/contact-us/contact-us.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './inicio/carousel/carousel.component';
import { ProductosComponent } from './productos/productos.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { FiltrosComponent } from './productos/filtros/filtros.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { InyectadorComponent } from './inyectador/inyectador.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    CarouselComponent,
    ProductosComponent,
    BuscadorComponent,
    FiltrosComponent,
    LoginComponent,
    RegisterComponent,
    InyectadorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
