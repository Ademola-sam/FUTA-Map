// import { MapType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { DataService } from 'src/app/services/data.service';
import { GeoJson } from 'src/app/schema/mapGeo';
// import { Feature, FeatureCollection, Point, GeoJsonProperties } from 'geojson';
import { Feature, Geometry, GeoJSON, LineString } from 'geojson';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  public map: mapboxgl.Map;
  public style = 'mapbox://styles/mapbox/streets-v11';
  lat = 7.3067797;
  lng = 5.1390878;
  message = 'Hello world';

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
      zoom: 14,
      center: [this.lng, this.lat],
    });

    const popup = new mapboxgl.Popup()
      .setLngLat([this.lng, this.lat])
      .setHTML(`<p style="color: blue; font-size:18px; font-weight:600;">FUTA</p>`)
      .addTo(this.map);

    // Add a marker at the same location
    new mapboxgl.Marker({ color: 'red' })
      .setLngLat([this.lng, this.lat]) // Set the marker's coordinates
      .setPopup(popup)
      .addTo(this.map)
      .togglePopup();

    // Dynamically import MapboxDirections
    // import('@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions').then(
    //   (MapboxDirections) => {
    //     const directions = new MapboxDirections.default({
    //       accessToken: environment.MAPBOX_KEY.accessToken, // Your Mapbox access token
    //       unit: 'metric',
    //       profile: 'mapbox/driving',
    //       alternatives: false, // Show alternative routes
    //       geometries: 'geojson',
    //       controls: {
    //         inputs: false,
    //         instructions: true,
    //       },
    //     });

    //     this.map.addControl(directions, 'bottom-right'); // Add directions control to the map

    //     // Set initial origin and destination
    //     const origin = [-77.0369, 38.9072]; // Example: Washington, D.C.
    //     const destination = [-77.0439, 38.8895]; // Example: Lincoln Memorial

    //     // Set origin and destination in directions control
    //     directions.setOrigin(origin);
    //     directions.setDestination(destination);

    //     // Create markers for origin and destination
    //     const originMarker = new mapboxgl.Marker({ color: 'green' }) // Customize the color or use a custom icon
    //       .setLngLat(origin as [number, number])
    //       .addTo(this.map);

    //     const destinationMarker = new mapboxgl.Marker({ color: 'red' }) // Customize the color or use a custom icon
    //       .setLngLat(destination as [number, number])
    //       .addTo(this.map);

    //     // Inside the route event handler
    //     directions.on(
    //       'route',
    //       (event: { route: { geometry: { coordinates: any } }[] }) => {
    //         // Clear any existing routes
    //         if (this.map.getLayer('route')) {
    //           this.map.removeLayer('route');
    //         }
    //         if (this.map.getSource('route')) {
    //           this.map.removeSource('route');
    //         }

    //         // Create a GeoJSON source from the route
    //         const routeGeoJSON: Feature<LineString> = {
    //           type: 'Feature', // Set the type to "Feature"
    //           properties: {}, // Include an empty properties object
    //           geometry: {
    //             type: 'LineString', // Specify the geometry type as "LineString"
    //             coordinates: event.route[0].geometry.coordinates, // Get the route geometry coordinates
    //           },
    //         };

    //         // Add the route as a new source
    //         this.map.addSource('route', {
    //           type: 'geojson',
    //           data: routeGeoJSON,
    //         });

    //         // Add a layer to visualize the route
    //         this.map.addLayer({
    //           id: 'route',
    //           type: 'line',
    //           source: 'route',
    //           layout: {
    //             'line-join': 'round',
    //             'line-cap': 'round',
    //           },
    //           paint: {
    //             'line-color': '#888', // Customize the line color
    //             'line-width': 10, // Customize the line width
    //           },
    //         });
    //       }
    //     );
    //   }
    // );

    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());

    this.map.scrollZoom.enable(); // Enable zooming using scroll
    this.map.dragPan.enable(); // Enable panning the map

    // Add geolocate control to the map.
    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true, // Automatically center the map on user's location
      showUserHeading: true, // Display the user's direction
    });

    // Add the control to the map
    this.map.addControl(geolocate);

    // Add marker on click
    this.map.on('click', (e) => {
      console.log('e => ', e);
      const coordinates = [e.lngLat.lng, e.lngLat.lat];
      console.log('Coordinate => ', coordinates);
      const newMaker = new GeoJson(coordinates, { message: this.message });
      console.log('New-Maker => ', newMaker);

      // Convert maker to plain object
      const plainMaker = newMaker.toPlainObject();
      console.log('PlainMaker => ', plainMaker);

      this.ds.createMaker(plainMaker);
    });

    // Add Firestore data source on map load
    this.map.on('load', () => {
      // Add the source if not already added
      if (!this.map.getSource('firebase')) {
        this.map.addSource('firebase', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [],
          },
        });

        // Optionally add a layer to visualize the data
        this.map.addLayer({
          id: 'firebase-layer',
          type: 'symbol',
          source: 'firebase',
          layout: {
            'text-field': '{message}',
            'text-size': 24,
            'text-transform': 'uppercase',
            'icon-image': 'rocket-15',
            'text-offset': [0, 1.5],
          },
          paint: {
            'text-color': '#f16624',
            'text-halo-color': '#fff',
            'text-halo-width': 2,
          },
        });
      }

      // Get the source after it's added
      // this.markers.subscribe((markers: any) => {
      //   console.log('Marker111 => ', markers);
      //   if (!Array.isArray(markers)) {
      //     console.error('Markers data is not an array.', markers);
      //     return;
      //   }
      //   console.log('Continue2');

      //   const features = markers
      //     .map((marker: any) => {
      //       if (marker) {
      //         console.log('Valid marker with coordinates:', marker.coordinates);
      //       }
      //       console.log('Continue2', features);
      //       return {
      //         type: 'Feature',
      //         geometry: {
      //           type: 'Point',
      //           coordinates: marker.coordinates,
      //         },
      //         properties: marker.properties || {},
      //       };
      //     })
      //     .filter((feature: any) => feature !== null);

      //   const data: FeatureCollection<Point, GeoJsonProperties> = {
      //     type: 'FeatureCollection',
      //     features: features as Feature<Point, GeoJsonProperties>[],
      //   };

      //   const source = this.map.getSource('firebase') as mapboxgl.GeoJSONSource;
      //   if (source) {
      //     source.setData(data);
      //   } else {
      //     console.error('Firebase source not found');
      //   }
      // });

      // Create map layers with real-time data after the style has loaded
    });
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
