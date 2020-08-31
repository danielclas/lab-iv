import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-ejercicio',
  templateUrl: './card-ejercicio.component.html',
  styleUrls: ['./card-ejercicio.component.css']
})
export class CardEjercicioComponent implements OnInit {

  @Input() clase: String;
  @Input() titulo: String;
  @Input() link: String;

  constructor() { }

  ngOnInit(): void {
  }

}
