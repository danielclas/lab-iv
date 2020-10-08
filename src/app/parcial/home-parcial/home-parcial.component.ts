import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-parcial',
  templateUrl: './home-parcial.component.html',
  styleUrls: ['./home-parcial.component.css']
})
export class HomeParcialComponent implements OnInit {

  public firstName: string;
  public lastName: string;
  public userName: string;
  public address: string;
  

  constructor() { }

  ngOnInit(): void {
  }

}
