import { Usuario } from '../usuario';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-listado-entidad',
  templateUrl: './listado-entidad.component.html',
  styleUrls: ['./listado-entidad.component.css']
})
export class ListadoEntidadComponent implements OnInit {

  @Input() listado: [Usuario];
  @Output() usuarioEvent = new EventEmitter<Usuario>();

  constructor() { }

  ngOnInit(): void {
    
  }

  emitirUsuario(value: Usuario) {
    this.usuarioEvent.emit(value);
  }
}
