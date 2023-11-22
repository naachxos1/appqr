import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  constructor() { this.printCurrentPosition();}

  ngOnInit() {
  }
  
  printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition({ enableHighAccuracy: true });

    console.log('posicion actual:', coordinates);
    console.log('latitud:', coordinates.coords.latitude);
    console.log('longitud:', coordinates.coords.longitude);
  };

}
