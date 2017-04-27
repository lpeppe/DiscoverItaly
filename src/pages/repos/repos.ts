import { Component, NgModule, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation';

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
  templateUrl: 'repos.html',
})

@NgModule({
  providers: [
    Geolocation
  ]
})

export class Repos {

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('search') searchElement: ElementRef;
  platform: Platform;
  geo: Geolocation;
  map: any;
  items: string[];
  autocomplete: any;
  placesDetails: any;
  marker: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public events: Events, platform: Platform, public geolocation: Geolocation) {
    this.platform = platform;
    this.geo = geolocation;
    this.items = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Repos');
    this.loadMap();
    this.autocomplete = new google.maps.places.AutocompleteService();
  }

  test() {
    console.log("I've been clicked!");
    //this.events.publish('test', 'lmao', Date.now());
  }

  loadMap() {
    this.platform.ready().then((readySource) => {
      this.geo.getCurrentPosition()
        .then(position => {
          let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

          let mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          }

          this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
          this.placesDetails = new google.maps.places.PlacesService(this.map);
          this.marker = new google.maps.Marker({
            position: latLng,
            animation: google.maps.Animation.DROP,
            map: this.map
          });
        }, (err) => {
          console.log(err);
        });
    });
  };

  getItems(ev: any) {
    this.items.splice(0, this.items.length);
    if (ev.target.value == undefined || ev.target.value == '' || ev.target.value == null)
      return;
    var request = {
      input: ev.target.value,
      componentRestrictions: { country: 'it' },
    };
    this.autocomplete.getPlacePredictions(request, (pred, status) => {
      for (let entry of pred)
        this.items.push(entry);
    });
  }

  buttonListener(item: any) {
    this.placesDetails.getDetails({placeId: item.place_id}, (result, status) => {
      this.map.setCenter(result.geometry.location);
      this.marker.setPosition(result.geometry.location);
    });
  }
}
