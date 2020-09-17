import { RequestService } from './../../request.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-control-entidad',
  templateUrl: './control-entidad.component.html',
  styleUrls: ['./control-entidad.component.css']
})
export class ControlEntidadComponent implements OnInit {

  listado: [];
  usuario: Usuario;
  constructor(private request: RequestService) { }

  ngOnInit(): void {
    this.request.get().subscribe((data: []) => this.listado = data);
  }

  asignarUsuario(usuario: Usuario){
    this.usuario = usuario;
    console.log("Usuario: ", usuario);
  }

}
