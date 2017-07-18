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
  Marker
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
  //@ViewChild('search') searchElement: ElementRef;
  map: GoogleMap;
  //items: string[];
  placesDetails: any;
  marker: any;
  selectedPlace: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public events: Events, public platform: Platform, public geo: Geolocation,
    public share: ShareService, public scraper: WebScraper,
    private autocomplete: Autocomplete, private googleMaps: GoogleMaps,
    private toast: Toast) {
  }

  // ionViewDidLoad() {
  //   this.loadMap();
  // }
  ngAfterViewInit() {
    this.platform.ready().then(() => {
      this.loadMap();
    })
  }
  /*loadMap() {
    this.platform.ready().then((readySource) => {
      let mapOptions = {
        center: new google.maps.LatLng(40.9143451, 14.7897786, 17),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.placesDetails = new google.maps.places.PlacesService(this.map);
      this.gpsRefresh();
    })
  }*/

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
      })
  }

  buttonListener(item: any) {
    console.log("pressed")
    this.placesDetails.getDetails({ placeId: item.place_id }, (result, status) => {
      console.log(result);
      this.selectedPlace = result.address_components;
      //this.map.setCenter(result.geometry.location);
      let latlng: LatLng = new LatLng(result.geometry.location.lat(), result.geometry.location.lng());
      this.moveMarker(latlng);
      this.selectedPlace.latLng = result.geometry.location;
    });
  }

  // moveMarker(location: any) {
  moveMarker(latlng: any) {
    // if (this.marker == null) {
    //   this.marker = new google.maps.Marker({
    //     position: location,
    //     animation: google.maps.Animation.DROP,
    //     map: this.map
    //   });
    // }
    // else
    //   this.marker.setPosition(location);
    //let pos: LatLng = new LatLng(latitude, longitude);
    let position: CameraPosition = { target: latlng };
    this.map.moveCamera(position);
    let markerOptions: MarkerOptions = {
      position: latlng,
      title: 'Ionic'
    };
    this.map.addMarker(markerOptions)
    //  .then((marker: Marker) => {
    //     marker.showInfoWindow();
    //   });
  }

  gpsRefresh() {
    // this.geo.getCurrentPosition()
    //   .then(position => {
    //     let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    //     this.map.setCenter(latLng);
    //     this.moveMarker(latLng);
    //   }, (err) => {
    //     console.log('GPS non attivato');
    //   });
    this.platform.ready().then(() => {
      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      this.geo.getCurrentPosition(options)
        .then(position => {
          let latlng: LatLng = new LatLng(position.coords.latitude, position.coords.longitude);
          this.moveMarker(latlng);
        }, (err) => {
          this.toast.show("GPS disattivato", '5000', 'center')
            .subscribe(_ => { })
          // console.log('GPS non attivato');
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
