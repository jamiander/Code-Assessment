import { environment } from 'src/environments/environment';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map: mapboxgl.Map;
  style: 'mapbox://styles/jamiander/ckcqo45ht02j91imjgie6lzok';
    lat: 39.09;
    lon: -94.57;

  constructor() { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    mapboxgl.accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
          container: 'map',
          style: this.style,
          zoom: 9,
          center: [-94.57, 39.09],
        });
    this.map.addControl(new mapboxgl.NavigationControl());

  }

}
