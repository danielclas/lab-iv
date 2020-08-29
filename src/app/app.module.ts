import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndiceComponent } from './indice/indice.component';
import { CalcularpromedioComponent } from './clase1/calcularpromedio/calcularpromedio.component';
import { LoginComponent } from './clase1/login/login.component';
import { BienvenidoComponent } from './clase1/bienvenido/bienvenido.component';
import { ErrorComponent } from './clase1/error/error.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    IndiceComponent,
    CalcularpromedioComponent,
    LoginComponent,
    BienvenidoComponent,
    ErrorComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
