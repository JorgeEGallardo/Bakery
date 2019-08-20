import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as leaflet from 'leaflet';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-geolocal',
  templateUrl: './geolocal.page.html',
  styleUrls: ['./geolocal.page.scss'],
})
export class GeolocalPage implements OnInit {

  constructor(public geolocation: Geolocation) { }

  ngOnInit() {
    this.geolocationNative();
   // this.drawMap();
    this.loadmap();
  }
/* 
  drawMap(): void {
    const map = Leaflet.map('map').setView( [-0.1836298, -78.4821286], 13);
    Leaflet.titleLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Hola',
      maxZoom: 18
    }).addTo(map);

    function onLocationError(e) {
      alert(e.message);
    }
    map.on('locationerror', onLocationError);
  } */

  loadmap() {
    const map = leaflet.map("map").fitWorld();
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
    }).addTo(map);
    map.locate({
      setView: true,
      maxZoom: 10
    }).on('locationfound', (e) => {
      let markerGroup = leaflet.featureGroup();
      let marker: any = leaflet.marker([e.latitude, e.longitude]).on('click', () => {
        alert('Marker clicked');
      })
      markerGroup.addLayer(marker);
      map.addLayer(markerGroup);
      }).on('locationerror', (err) => {
        alert(err.message);
    })
  }

  geolocationNative() {
    this.geolocation.getCurrentPosition().then((getposition: Geoposition) => {
      console.log(getposition);
    });
    const watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      console.log(data.coords.latitude);
    });
  }

  getLatitude() {
    const watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      return data.coords.latitude;
    });
  }

  getLongitude() {
    const watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      return data.coords.longitude;
    });
  }
}
