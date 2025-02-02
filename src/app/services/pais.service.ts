import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http:HttpClient) { }

  obtenerTodosLosPaises() {
    return this.http.get('https://restcountries.com/v3.1/all');
  }
}
