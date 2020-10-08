import { RequestService } from './../../request.service';
import { Pais } from './../../pre-parcial/pais';
import { Component, OnInit } from '@angular/core';
import * as EmailValidator from 'email-validator';

@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.css']
})
export class AltaActorComponent implements OnInit {

  url: String = "https://restcountries.eu/rest/v2/region/americas";
  paises: Pais[] = [];

  public primerNombre: String;
  public apellido: String;
  public email: string;
  public sexo: string;
  public fechaNacimiento;
  private fecha;
  public direccion: String;
  public pais: String;
  public error: Boolean = false;

  constructor(private http: RequestService) { }

  ngOnInit(): void {
    this.error = false;
    this.http.get().subscribe((data: any[]) => this.paises = data);
  }

  cambiarPais(pais: String){
    this.pais = pais;
  }

  validarAlta(){    

    this.fecha = this.fechaNacimiento._d;

    if(!EmailValidator.validate(this.email)){
      this.error = true;
      return;
    }

    if([this.primerNombre, this.pais, this.sexo, this.apellido, this.direccion].some(a => a.length == 0 || a == '')){
      this.error = true;
      return;
    }

    if(this.fechaNacimiento == null || this.fechaNacimiento == ''){
      this.error = true;
      return;
    }
  }

}
