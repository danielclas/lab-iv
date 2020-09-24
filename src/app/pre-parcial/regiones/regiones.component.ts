import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-regiones',
  templateUrl: './regiones.component.html',
  styleUrls: ['./regiones.component.css']
})
export class RegionesComponent implements OnInit {

  @Input() region;  
  @Output() regionEvent = new EventEmitter<String>();
  constructor() { }

  ngOnInit(): void {
    this.regionEvent.emit("africa");
  }

  emitirRegion(value: String){
    this.regionEvent.emit(value);
  }
}
