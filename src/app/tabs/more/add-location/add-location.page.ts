// import { MapType } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { DataService } from 'src/app/services/data.service';
import { GeoJson } from 'src/app/schema/mapGeo';
// import { Feature, FeatureCollection, Point, GeoJsonProperties } from 'geojson';
import { Feature, Geometry, GeoJSON, LineString } from 'geojson';
import { environment } from 'src/environments/environment';
import * as MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.page.html',
  styleUrls: ['./add-location.page.scss'],
})
export class AddLocationPage implements OnInit {
  public map: mapboxgl.Map;
  public style = 'mapbox://styles/mapbox/streets-v12';
  lat = 7.3067797;
  lng = 5.1390878;
  message = 'Hello world';
  mapHeight: string = '80vh';
  mapWidth: string = '100';

  //  Data
  source: any;
  markers: any;

  constructor(private ds: DataService) {}

  ngOnInit() {
    // Subscribe to the markers observable
    this.ds.getMarkers().subscribe(
      (markers) => {
        // Log the markers data
        console.log('Markers => ', markers[1]);

        // Assign the markers to a property if needed
        this.markers = markers;

        console.log('Marker', this.markers);

        // Now that markers are available, initialize the map
        this.initializeMap();

        markers.forEach((coordinate) => {
          this.addTextMarker(
            coordinate.geometry.coordinates,
            coordinate.properties.message
          );
        });
      },
      (error) => {
        // Handle any errors that occur during fetching
        console.error('Error fetching markers:', error);
      }
    );

    this.initializeMap();
  }

  private initializeMap() {
    this.buildMap();
  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map-box',
      style: this.style,
      zoom: 14,
      center: [this.lng, this.lat],
    });
    // Ensure map is resized correctly after load
    this.map.on('load', () => {
      this.map.resize();
    });

    const popup = new mapboxgl.Popup()
      .setLngLat([this.lng, this.lat])
      .setHTML(
        `<p style="color: blue; font-size:18px; font-weight:600;">FUTA</p>`
      )
      .addTo(this.map);

    // Add a marker at the same location
    new mapboxgl.Marker({ color: 'red' })
      .setLngLat([this.lng, this.lat]) // Set the marker's coordinates
      .setPopup(popup)
      .addTo(this.map)
      .togglePopup();

    // Add map controls
    const navControl = new mapboxgl.NavigationControl({
      visualizePitch: true,
    });

    this.map.addControl(new mapboxgl.ScaleControl(), 'bottom-right');

    // Add marker on click
    this.map.on('click', (e) => {
      console.log('e => ', e);
      const coordinates = [e.lngLat.lng, e.lngLat.lat];
      console.log('Coordinate => ', coordinates);
      const newMaker = new GeoJson(coordinates, { message: this.message });
      console.log('New-Maker => ', newMaker);

      // Convert maker to plain object
      const plainMaker = newMaker.toPlainObject();

      this.ds.createMaker(plainMaker);
    });

    // Add Firestore data source on map load
  }

  addTextMarker(coordinates: number[], message: string) {
    const popup = new mapboxgl.Popup()
      .setLngLat(coordinates as [number, number])
      .setHTML(`<p style="color: blue; font-size:16px;">${message}</p>`)
      .addTo(this.map);

    new mapboxgl.Marker()
      .setLngLat(coordinates as [number, number])
      .setPopup(popup)
      .addTo(this.map)
      .togglePopup();
  }

  // Helpers

  removeMarker(maker_id: any) {
    this.ds.removeMaker(maker_id);
  }

  flyTo(data: GeoJson) {
    console.log('Flyto => ', data.geometry.coordinates);
    this.map.flyTo({
      center: data.geometry.coordinates as [number, number],
    });
  }
}
