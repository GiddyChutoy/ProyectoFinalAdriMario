import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { AboutUsComponent } from './header/about-us/about-us.component';
import { ContactUsComponent } from './header/contact-us/contact-us.component';
import { InicioComponent } from './inicio/inicio.component';
import { InyectadorComponent } from './inyectador/inyectador.component';
import { FormularioModificadorComponent } from './inyectador/modificador/formulario-modificador/formulario-modificador.component';
import { ModificadorComponent } from './inyectador/modificador/modificador.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { ProductosComponent } from './productos/productos.component';


const routes: Routes = [
  {path:'',redirectTo:'/inicio',pathMatch:'full'},
  {path:'inicio',component:InicioComponent},
  {path:'about',component:AboutUsComponent},
  {path:'contacto',component:ContactUsComponent},
  {path:'productos/:tipo',component:ProductosComponent},
  {path:'resultado/:busqueda',component:BuscadorComponent},
  {path:'anadir-componente', component: InyectadorComponent},
  {path:"modificador", component: ModificadorComponent},
  {path:"formularioModificador", component: FormularioModificadorComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent}
  // {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
