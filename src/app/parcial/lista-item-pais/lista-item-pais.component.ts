import { Pais } from './../../pre-parcial/pais';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-lista-item-pais',
  templateUrl: './lista-item-pais.component.html',
  styleUrls: ['./lista-item-pais.component.css']
})
export class ListaItemPaisComponent implements OnInit {

  @Input() pais: Pais;
  @Output() paisEvent = new EventEmitter<String>();
  
  constructor() { }

  ngOnInit(): void {
  }

  emitirPais(value: String){
    this.paisEvent.emit(value);
  }

}
