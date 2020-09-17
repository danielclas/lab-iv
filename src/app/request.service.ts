import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  url: string = "https://api.mocki.io/v1/570c5e5c";

  constructor(private http: HttpClient) { }

  public get(){
    return this.http.get(this.url);
  }
}
