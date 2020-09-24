import { Pais } from './../pais';
import { RequestService } from './../../request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-parcial-home',
  templateUrl: './pre-parcial-home.component.html',
  styleUrls: ['./pre-parcial-home.component.css']
})
export class PreParcialHomeComponent implements OnInit {

  constructor(private http: RequestService) { }

  url: String = "https://restcountries.eu/rest/v2/region/";
  paises: Pais[] = [];
  ngOnInit(): void {
  }

  cambiarRegion(region: String){
    this.http.url = this.url + region.toLocaleLowerCase();
    this.http.get().subscribe((data: any[]) => this.paises = data);
  }

}
