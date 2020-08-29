import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcularpromedio',
  templateUrl: './calcularpromedio.component.html',
  styleUrls: ['./calcularpromedio.component.css']
})
export class CalcularpromedioComponent implements OnInit {

  public edad1: number;
  public edad2: number;
  public promedio: number;
  public suma: number;

  constructor() { }

  ngOnInit(): void {
    this.edad1 = 0;
    this.edad2 = 0;
    this.suma = 0;
    this.promedio = 0;
  }

  calcular(): void{
    if(!isNaN(this.edad1) || !isNaN(this.edad2)){
      this.suma = this.edad1 + this.edad2;
      this.promedio = this.suma / 2;
    }
  }

  limpiarFormulario(): void{
    this.edad1 = 0;
    this.edad2 = 0;
    this.suma = 0;
    this.promedio = 0;
  }
}
