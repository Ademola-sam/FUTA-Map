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
import { LocationDataService } from 'src/app/services/location-data.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  public map: mapboxgl.Map;
  public style = 'mapbox://styles/mapbox/streets-v12';
  lat = 7.3067797;
  lng = 5.1390878;

  searchResult: any[] = [];
  public setDestination: any[] = [];

  //  Data
  source: any;
  markers: any;

  directions: any;

  constructor(private ds: DataService, private ld: LocationDataService) {
    (mapboxgl as any).accessToken = environment.MAPBOX_KEY.accessToken;
  }

  ngOnInit() {
    // // Subscribe to the markers observable
    // this.ds.getMarkers().subscribe(
    //   (markers) => {
    //     // Log the markers data
    //     console.log('Markers => ', markers[1]);

    //     // Assign the markers to a property if needed
    //     this.markers = markers;

    //     // Now that markers are available, initialize the map
    //     this.initializeMap();

    //     markers.forEach((coordinate) => {
    //       this.addTextMarker(
    //         coordinate.geometry.coordinates,
    //         coordinate.properties.message
    //       );
    //     });
    //   },
    //   (error) => {
    //     // Handle any errors that occur during fetching
    //     console.error('Error fetching markers:', error);
    //   }
    // );

    this.initializeMap();
  }

  private initializeMap() {
    // local the user
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition((position) => {
    //     this.lat = position.coords.latitude;
    //     this.lng = position.coords.longitude;
    //     this.map.flyTo({
    //       center: [this.lng, this.lat],
    //     });
    //   });
    // }

    this.buildMap();
  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'mapa-box',
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat],
    });

    // Ensure map is resized correctly after load
    this.map.on('load', () => {
      this.map.resize();
      this.trackUserLocation();
      const keyline = document.querySelector(
        '.mapbox-directions-component-keyline'
      ) as HTMLElement;
      if (keyline) {
        keyline.style.display = 'none';
      }

      const cycling = document.querySelector(
        '.mapboxgl-ctrl-directions.mapboxgl-ctrl'
      ) as HTMLElement;
      if (cycling) {
        cycling.style.marginTop = '60px';
      }
    });

    // const popup = new mapboxgl.Popup()
    //   .setLngLat([this.lng, this.lat])
    //   .setHTML(
    //     `<p style="color: blue; font-size:18px; font-weight:600;">FUTA</p>`
    //   )
    //   .addTo(this.map);

    // Add a marker at the same location
    // new mapboxgl.Marker({ color: 'red' })
    //   .setLngLat([this.lng, this.lat]) // Set the marker's coordinates
    //   .setPopup(popup)
    //   .addTo(this.map)
    //   .togglePopup();

    // Add map controls
    const navControl = new mapboxgl.NavigationControl({
      visualizePitch: true,
    });

    this.map.addControl(navControl, 'bottom-right');
    // Add geolocate control to the map.
    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true, // Automatically center the map on user's location
      showUserHeading: true, // Display the user's direction
    });

    geolocate.on('geolocate', locateUser);

    // Add the control to the map
    this.map.addControl(geolocate, 'bottom-right');
    this.map.addControl(new mapboxgl.ScaleControl(), 'bottom-left');

    this.directions = new MapboxDirections.default({
      accessToken: environment.MAPBOX_KEY.accessToken,
      unit: 'metric',
      profile: 'mapbox/driving',
      container: 'directions',
      bearing: true,
      steps: false,
      voice_instructions: true,
      controls: {
        inputs: true,
        instructions: false,
        profileSwitcher: true,
      },
    });
    this.map.addControl(this.directions, 'top-left');

    this.map.on('load', () => {
      geolocate.trigger();
      this.setInitialOrigin();
      this.updateDirectionsDestination();
      this.directions.on('route', () => {
        const mapInst = document.querySelector(
          '.mapbox-directions-instructions'
        ) as HTMLElement;
        if (mapInst) {
          mapInst.style.display = 'none';
        }
      });
    });

    function locateUser(e: any) {
      console.log(
        'Lng :' + e.coords.longitude + ' ' + 'Lat :' + e.coords.latitude
      );
    }
  }

  setInitialOrigin() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.directions.setOrigin([
            position.coords.longitude,
            position.coords.latitude,
          ]);
        },
        (error) => {
          console.error('Error fetching location for origin:', error);
        },
        { enableHighAccuracy: true }
      );
    }
  }

  async inputChanged($event): Promise<void> {
    const value = $event.target.value;
    if (value.length <= 0) {
      this.searchResult = [];
      return;
    }
    const regex = new RegExp(value, 'i');

    const data = await this.ld.locations;
    const results = data.filter((location) => regex.test(location.Location));

    this.searchResult = results;
  }

  flyTo(data: any) {
    this.map.flyTo({
      center: [data.Latitude, data.Longitude],
    });
    this.setDestination = [data.Latitude, data.Longitude];
    this.updateDirectionsDestination();
    this.searchResult = [];
    return;
  }

  updateDirectionsDestination() {
    if (this.setDestination && this.setDestination.length > 0) {
      this.directions.setDestination([
        this.setDestination[0],
        this.setDestination[1],
      ]);
    }
  }
}
