import { RequestService } from './../../request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-entidad',
  templateUrl: './control-entidad.component.html',
  styleUrls: ['./control-entidad.component.css']
})
export class ControlEntidadComponent implements OnInit {

  listado: [];
  constructor(private request: RequestService) { }

  ngOnInit(): void {
    this.request.get().subscribe((data: []) => this.listado = data);
  }

}
