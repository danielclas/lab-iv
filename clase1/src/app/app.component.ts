import { Component } from '@angular/core';
import { parse } from 'path';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  edad1: any;
  edad2: any;
  resultado: any;

  calcular(){
    let num1 = parseFloat(this.edad1);
    let num2 = parseFloat(this.edad2);

    if(num1 && num2){
      this.resultado = (num1 + num2) / 2;
    }else{
      alert("Valores ingresados no son numéricos");
      this.limpiar();
    }
  }

  limpiar(){
    this.edad1 = "";
    this.edad2 = "";
    this.resultado = "";
  }
}
