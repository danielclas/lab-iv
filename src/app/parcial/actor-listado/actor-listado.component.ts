import { ListaActoresComponent } from './../lista-actores/lista-actores.component';
import { ListaItemPaisComponent } from './../lista-item-pais/lista-item-pais.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  borrar(){
  }

}
