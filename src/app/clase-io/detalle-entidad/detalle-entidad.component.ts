import { Usuario } from '../usuario';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-detalle-entidad',
  templateUrl: './detalle-entidad.component.html',
  styleUrls: ['./detalle-entidad.component.css']
})
export class DetalleEntidadComponent implements OnInit {

  @Input() usuario: Usuario;
  @Output() usuarioEvent = new EventEmitter<Usuario>();

  constructor() { }

  ngOnInit(): void {
  }

  cerrarTarjeta(){
    this.usuario = null;
  }
  
  emitirUsuario(value: Usuario) {
    this.usuarioEvent.emit(value);
  }

}
