import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    var texto = '<p>Latitude: <input size="20" type="text" id="latbox" name="lat" ></p>'+
                '<p>Longitude: <input size="20" type="text" id="lngbox" name="lng" ></p>';
    var miMarcador = new google.maps.LatLng(-31.4286287, -64.1848189); //Plaza españa
    var mapOptions = {
        zoom: 12,
        center: miMarcador
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // Place a draggable marker on the map
    var marker = new google.maps.Marker({
        position: miMarcador,
        map: map,
        draggable: true,
        title: "Mapa2"
    });

    var informacion = new google.maps.InfoWindow({
        content: texto
    });

    marker.addListener('click', function(event){
        informacion.open(map, marker)
        document.getElementById("latbox").value = event.latLng.lat();
        document.getElementById("lngbox").value = event.latLng.lng();
    });

              
  }

  

}