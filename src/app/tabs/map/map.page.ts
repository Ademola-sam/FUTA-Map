// import { MapType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { DataService } from 'src/app/services/data.service';
import { GeoJson, FeatureCollection } from 'src/app/schema/mapGeo';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  public map: mapboxgl.Map;
  public style = 'mapbox://styles/mapbox/streets-v11';
  lat = 7.250771;
  lng = 5.210266;
  message = "Hello world"

  //  Data
  source: any;
  markers: any;

  constructor(private ds:DataService) {}

  ngOnInit() {
    this.markers = this.ds.getMakers();
    this.initializeMap()
  }

  private initializeMap() {

    // local the user
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.map.flyTo({
          center: [this.lng, this.lat]
        })
      })
    }
    this.buildMap()
  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'mapa-box',
      style: this.style,
      zoom: 14,
      center: [this.lng, this.lat],
    });

    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());

    // Add maker on click
    this.map.on('click', (e) => {
      const coordinates = [e.lngLat.lng, e.lngLat.lat];
      const newMaker = new GeoJson(coordinates);
      this.ds.createMaker(newMaker);
    });

    // Add firestore data on map load
    this.map.on('load', (e) => {
      this.map.addSource('firebase', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [],
        },
      });
    });

    // get source
    this.source = this.map.getSource('firebase');

    // subscribe to firestore and set data source
    this.markers.subscribe((markers: any) => {
      const data = {
        type: 'FeatureCollection',
        features: markers.map((marker: any) => ({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: marker.coordinates, // Assuming `marker` has a `coordinates` field
          },
          properties: marker.properties || {}, // Assuming `marker` may have additional properties
        })),
      };
      this.source.setData(data);
    });
  }


}
