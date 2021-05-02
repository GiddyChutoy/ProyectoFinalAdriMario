import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './header/about-us/about-us.component';
import { ContactUsComponent } from './header/contact-us/contact-us.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './inicio/carousel/carousel.component';
import { ProcesadoresComponent } from './procesadores/procesadores.component';
import { TarjetasGraficasComponent } from './tarjetas-graficas/tarjetas-graficas.component';
import { PlacasBaseComponent } from './placas-base/placas-base.component';
import { RamComponent } from './ram/ram.component';
import { TorresComponent } from './torres/torres.component';
import { TecladosComponent } from './teclados/teclados.component';
import { RatonesComponent } from './ratones/ratones.component';
import { ProductosComponent } from './productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    CarouselComponent,
    ProcesadoresComponent,
    TarjetasGraficasComponent,
    PlacasBaseComponent,
    RamComponent,
    TorresComponent,
    TecladosComponent,
    RatonesComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
