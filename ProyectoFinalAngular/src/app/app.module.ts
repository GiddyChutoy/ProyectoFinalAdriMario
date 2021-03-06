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
import { precioMaximoPipe } from './pipes/precio-maximo.pipe';
import { MarcaFiltradaPipe } from './pipes/marca-filtrada.pipe';
import { ModificadorComponent } from './inyectador/modificador/modificador.component';
import { FormularioModificadorComponent } from './inyectador/modificador/formulario-modificador/formulario-modificador.component';
import { CarritoComponent } from './carrito/carrito.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { DetallesProductoComponent } from './productos/detalles-producto/detalles-producto.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioModificarComponent } from './usuario/usuario-modificar/usuario-modificar.component';
import { DialogoConfirmacionComponent } from './modal/dialogo-confirmacion/dialogo-confirmacion.component';
import { ProductoMarcasComponent } from './producto-marcas/producto-marcas.component';



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
    DetallesProductoComponent,
    UsuarioComponent,
    UsuarioModificarComponent,
    DialogoConfirmacionComponent,
    ProductoMarcasComponent
   
    
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
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent, RegisterComponent]
})
export class AppModule { }
