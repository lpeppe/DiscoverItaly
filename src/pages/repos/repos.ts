import { Component, NgModule, ViewChild, ElementRef } from '@angular/core';
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

  @ViewChild('map') mapElement: ElementRef;
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
        let latlng: LatLng = new LatLng(40.9143451, 14.7897786);
        let position: CameraPosition = {
          target: latlng,
          zoom: 18,
          tilt: 30
        };
        this.map.moveCamera(position);
        this.map.setClickable(false);
        this.gpsRefresh();
      })
  }

  buttonListener(item: any) {
    this.scraper.getPlaceDetails(item.place_id)
      .subscribe(data => {
        let position: CameraPosition = {
          target: {
            lat: data.lat,
            lng: data.lng
          },
          zoom: 18,
          tilt: 30
        };
        this.moveMarker(data.lat, data.lng)
          .then(_ => this.map.animateCamera(position))
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
        let position: CameraPosition = {
          target: {
            lat: loc.latLng.lat,
            lng: loc.latLng.lng
          },
          zoom: 18,
          tilt: 30
        };
        this.moveMarker(loc.latLng.lat, loc.latLng.lng)
          .then(_ => this.map.animateCamera(position))
      }, _ => {
        this.toast.show('GPS disattivato', '5000', 'center').subscribe(
          toast => {
            console.log(toast);
          })
    })
  }

  selectPlace() {
    this.share.setPlace(this.selectedPlace[0].long_name);
    this.share.setProvincia(this.selectedPlace[2].long_name);
    this.share.setLat(this.selectedPlace.latLng.lat());
    this.share.setLng(this.selectedPlace.latLng.lng());
  }
}
