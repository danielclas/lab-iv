import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-boton-entidad',
  templateUrl: './boton-entidad.component.html',
  styleUrls: ['./boton-entidad.component.css']
})
export class BotonEntidadComponent implements OnInit {

  @Input() usuario;
  @Output() usuarioEvent = new EventEmitter<Usuario>();

  constructor() { }

  ngOnInit(): void {
  }

  emitirUsuario(value: Usuario) {
    this.usuarioEvent.emit(value);
  }

}
