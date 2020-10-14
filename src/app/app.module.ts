import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndiceComponent } from './indice/indice.component';
import { CalcularpromedioComponent } from './clase1/calcularpromedio/calcularpromedio.component';
import { LoginComponent } from './clase1/login/login.component';
import { BienvenidoComponent } from './clase1/bienvenido/bienvenido.component';
import { ErrorComponent } from './clase1/error/error.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CardEjercicioComponent } from './card-ejercicio/card-ejercicio.component';
import { ListadoEntidadComponent } from './clase-io/listado-entidad/listado-entidad.component';
import { BienvenidoIoComponent } from './clase-io/bienvenido-io/bienvenido-io.component';
import { ControlEntidadComponent } from './clase-io/control-entidad/control-entidad.component';
import { HttpClientModule } from '@angular/common/http';
import { DetalleEntidadComponent } from './clase-io/detalle-entidad/detalle-entidad.component';
import { BotonEntidadComponent } from './clase-io/boton-entidad/boton-entidad.component';
import { PreParcialHomeComponent } from './pre-parcial/pre-parcial-home/pre-parcial-home.component';
import { RegionesComponent } from './pre-parcial/regiones/regiones.component';
import { PaisBanderaComponent } from './pre-parcial/pais-bandera/pais-bandera.component';
import { HomeParcialComponent } from './parcial/home-parcial/home-parcial.component';
import { AltaActorComponent } from './parcial/alta-actor/alta-actor.component';
import { ListaItemPaisComponent } from './parcial/lista-item-pais/lista-item-pais.component';
import {DpDatePickerModule} from 'ng2-date-picker';
import { ActorListadoComponent } from './parcial/actor-listado/actor-listado.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ListaActoresComponent } from './parcial/lista-actores/lista-actores.component';

@NgModule({
  declarations: [
    AppComponent,
    IndiceComponent,
    CalcularpromedioComponent,
    LoginComponent,
    BienvenidoComponent,
    ErrorComponent,
    NotfoundComponent,
    CardEjercicioComponent,
    ListadoEntidadComponent,
    BienvenidoIoComponent,
    ControlEntidadComponent,
    DetalleEntidadComponent,
    BotonEntidadComponent,
    PreParcialHomeComponent,
    RegionesComponent,
    PaisBanderaComponent,
    HomeParcialComponent,
    AltaActorComponent,
    ListaItemPaisComponent,
    ActorListadoComponent,
    ListaActoresComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DpDatePickerModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 