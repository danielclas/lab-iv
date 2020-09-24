import { Component, Input, OnInit } from '@angular/core';
import { Pais } from '../pais';

@Component({
  selector: 'app-pais-bandera',
  templateUrl: './pais-bandera.component.html',
  styleUrls: ['./pais-bandera.component.css']
})
export class PaisBanderaComponent implements OnInit {

  @Input() pais: Pais;
  constructor() { }

  ngOnInit(): void {
  }

}
