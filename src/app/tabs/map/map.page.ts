import { MapType } from '@angular/compiler';
import { Component, ViewChild, ElementRef } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage {

  @ViewChild('map', {  static: false }) mapElement! : ElementRef;
  Map: any;
  

  constructor() {
    

 }

  ionViewDldEnter() {
    this.loadMap();
  }
  
  loadMap() {
     let latLng = new google.maps.LatLng( 35.7833, -120.4167);
     let mapOptions = {
      center: location, // Initial camera center of the map
      zoom: 15, //Camera zoom value
      MapType: google.maps.MapTypeId.ROADMAP
    } 
    
    this.Map = new google.maps.Map(this.mapElement.nativeElement,mapOptions);//'gmap' is the html element
     
     }

  } 

