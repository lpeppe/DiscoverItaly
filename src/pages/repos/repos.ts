import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation';
import { ShareService } from '../../providers/share-service';
import { WebScraper } from '../../providers/web-scraper';
import { Autocomplete } from '../../providers/autocomplete';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  CameraPosition,
  MarkerOptions,
  Marker,
  ILatLng
} from '@ionic-native/google-maps';
import { Toast } from '@ionic-native/toast';

declare var google;
/**
 * Generated class for the Repos page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-repos',
  templateUrl: 'repos.html'
})

@NgModule({
  providers: [
    Geolocation
  ]
})

export class Repos {

  map: GoogleMap;
  placesDetails: any;
  marker: any;
  selectedPlace: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public events: Events, public platform: Platform, public geo: Geolocation,
    public share: ShareService, public scraper: WebScraper,
    private autocomplete: Autocomplete, private googleMaps: GoogleMaps,
    private toast: Toast) {
  }
  ngAfterViewInit() {
    this.platform.ready().then(() => {
      this.loadMap();
    })
  }

  loadMap() {
    let element: HTMLElement = document.getElementById('map');
    this.map = this.googleMaps.create(element);
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(_ => {
        this.map.setClickable(false);
        if (this.share.getLat() == undefined)
          this.gpsRefresh();
        else {
          this.moveMarker(this.share.getLat(), this.share.getLng())
            .then(_ => this.moveCamera(this.share.getLat(), this.share.getLng()))
        }
      })
  }

  buttonListener(item: any) {
    this.scraper.getPlaceDetails(item.place_id)
      .subscribe(data => {
        this.moveMarker(data.lat, data.lng)
          .then(_ => this.moveCamera(data.lat, data.lng))
        this.share.setLat(data.lat);
        this.share.setLng(data.lng);
        this.share.setCitta(data.citta);
        this.share.setProvincia(data.provincia);
        this.share.setRegione(data.regione);
      })
  }

  moveMarker(lat: any, lng: any) {
    this.map.clear();
    let latlng: ILatLng = {
      lat: lat,
      lng: lng
    }
    let markerOptions: MarkerOptions = {
      position: latlng
    };
    return this.map.addMarker(markerOptions)
  }

  gpsRefresh() {
    this.map.getMyLocation()
      .then(loc => {
        let lat = loc.latLng.lat;
        let lng = loc.latLng.lng;
        this.moveMarker(lat, lng)
          .then(_ => this.moveCamera(lat, lng))
        this.scraper.getReverseGeocoding(lat, lng)
          .subscribe(data => {
            this.share.setCitta(data.citta);
            this.share.setProvincia(data.provincia);
            this.share.setRegione(data.regione);
          })
        this.share.setLat(lat);
        this.share.setLng(lng);
      }, _ => {
        this.toast.show('GPS disattivato', '5000', 'center').subscribe(
          toast => {
            console.log(toast);
          })
      })
  }

  moveCamera(lat: any, lng: any) {
    let position: CameraPosition = {
      target: {
        lat: lat,
        lng: lng
      },
      zoom: 18,
      tilt: 30
    };
    this.map.animateCamera(position);
  }
}
