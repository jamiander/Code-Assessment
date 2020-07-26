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
          style: 'mapbox://styles/jamiander/ckcqo45ht02j91imjgie6lzok',
          zoom: 9,
          center: [-94.57, 39.09],
        });
    this.map.addControl(new mapboxgl.NavigationControl());

    const layers = ['kc-tracts', 'kc-neighborhoods'];
    const colors = ['#4d65d1', '#d13d3d'];

    for (let i = 0; i < layers.length; i++) {
      const legend = document.getElementById('legend');
      const layer = layers[i];
      const color = colors[i];
      const item = document.createElement('div');
      const key = document.createElement('span');
      key.className = 'legend-key';
      key.style.backgroundColor = color;

      const value = document.createElement('span');
      value.innerHTML = layer;
      item.appendChild(key);
      item.appendChild(value);
      legend.appendChild(item);
    }

  }

}
