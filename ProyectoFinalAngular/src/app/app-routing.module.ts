import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './header/about-us/about-us.component';
import { ContactUsComponent } from './header/contact-us/contact-us.component';
import { InicioComponent } from './inicio/inicio.component';
import { PlacasBaseComponent } from './placas-base/placas-base.component';
import { ProcesadoresComponent } from './procesadores/procesadores.component';
import { RamComponent } from './ram/ram.component';
import { RatonesComponent } from './ratones/ratones.component';
import { TarjetasGraficasComponent } from './tarjetas-graficas/tarjetas-graficas.component';
import { TecladosComponent } from './teclados/teclados.component';
import { TorresComponent } from './torres/torres.component';

const routes: Routes = [
  {path:'',redirectTo:'/inicio',pathMatch:'full'},
  {path:'inicio',component:InicioComponent},
  {path:'procesadores',component:ProcesadoresComponent},
  {path:'tarjetasgraficas',component:TarjetasGraficasComponent},
  {path:'placasbase',component:PlacasBaseComponent},
  {path:'ram',component:RamComponent},
  {path:'cajas',component:TorresComponent},
  {path:'teclados',component:TecladosComponent},
  {path:'ratones',component:RatonesComponent},
  {path:'about',component:AboutUsComponent},
  {path:'contacto',component:ContactUsComponent},
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
