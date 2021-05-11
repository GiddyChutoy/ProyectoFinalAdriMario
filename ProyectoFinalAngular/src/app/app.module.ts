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
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { InyectadorComponent } from './inyectador/inyectador.component';
import { precioMaximoPipe } from './productos/precio-maximo.pipe';
import { MarcaFiltradaPipe } from './productos/marca-filtrada.pipe';
import { ModificadorComponent } from './inyectador/modificador/modificador.component';
import { FormularioModificadorComponent } from './inyectador/modificador/formulario-modificador/formulario-modificador.component';
import { CarritoComponent } from './carrito/carrito.component';
import { OfertaLogitechComponent } from './oferta-logitech/oferta-logitech.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr'
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
    LoginComponent,
    RegisterComponent,
    InyectadorComponent,
    precioMaximoPipe,
    MarcaFiltradaPipe,
    ModificadorComponent,
    FormularioModificadorComponent,
    CarritoComponent,
    OfertaLogitechComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    NgxPaginationModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
