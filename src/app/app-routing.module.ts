import { ControlEntidadComponent } from './clase-io/control-entidad/control-entidad.component';
import { BienvenidoIoComponent } from './clase-io/bienvenido-io/bienvenido-io.component';
import { BienvenidoComponent } from './clase1/bienvenido/bienvenido.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './clase1/login/login.component';
import { CalcularpromedioComponent } from './clase1/calcularpromedio/calcularpromedio.component';
import { IndiceComponent } from './indice/indice.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: IndiceComponent, data: {animation: 'Home'}},
  {path: 'clase1/calcularpromedio', component: CalcularpromedioComponent},
  {path: 'clase1/login', component: LoginComponent},
  {path: 'clase1/bienvenido', component: BienvenidoComponent},
  {path: 'clase-io/bienvenido', component: BienvenidoIoComponent},
  {path: 'clase-io/control-entidad', component: ControlEntidadComponent},
  {path: '**', component: NotfoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
