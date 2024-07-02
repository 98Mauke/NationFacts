
import { Component, OnInit } from '@angular/core';
import { PaisService } from '../services/pais.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

//Importamos httpClient en el app.module.ts.
//Luego lo ponemos en nuestro constructor (Linea 21)

export class InicioPage implements OnInit {
  paises:any = [];

  ngOnInit() {
    this.obtenerTodosLosPaises();
  }
  
  constructor(private paisService:PaisService) {}

  //El http devuelve un observable, al ser observable hay que suscribirnos para saber cuando cambia y  cuando regresa.
  //Linea 26 obtenemos la lista de paises y despues hacemos un map, para que cada pais que tiene toda la informacion, vamos a generar un pais nuevo con informacion que nosotros le pedimos.
  //Y ese pais lo metemos en nuestra listaPaises.
  obtenerTodosLosPaises() {
    this.paisService.obtenerTodosLosPaises().subscribe((listaDePaises: any) => {
      console.log(listaDePaises);

      //auxPais es una variable por cada pais que tengamos
      listaDePaises.map((auxPais: any) => {

        let pais = {
          bandera: auxPais.flags.svg,
          nombre: auxPais.name.common,
          capital: auxPais.capital,
          region: auxPais.region,
          moneda: auxPais.currencies,
          esIndependiente: auxPais.independent,
          poblacion: auxPais.population,
          idioma: auxPais.languages,
          continente: auxPais.continents,
          mapa: auxPais.maps.googleMaps
        }
        this.paises.push(pais);
      })

    })
  }


}
