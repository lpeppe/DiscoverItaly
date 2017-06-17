import { Component, NgModule, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation';
import { ShareService } from '../../providers/share-service';
import { WebScraper } from '../../providers/web-scraper';

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
  @ViewChild('search') searchElement: ElementRef;
  platform: Platform;
  geo: Geolocation;
  map: any;
  items: string[];
  autocomplete: any;
  placesDetails: any;
  marker: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public events: Events, platform: Platform, public geolocation: Geolocation,
    public share: ShareService, public scraper: WebScraper) {
    this.platform = platform;
    this.geo = geolocation;
    this.items = [];
    this.events = events;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Repos');
    this.loadMap();
    this.autocomplete = new google.maps.places.AutocompleteService();
    this.scraper.getRemoteData();
  }

  loadMap() {
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
    });
  };

  getItems(ev: any) {
    if (ev.target.value == undefined || ev.target.value == '' || ev.target.value == null)
      return;
    var request = {
      input: ev.target.value,
      componentRestrictions: { country: 'it' },
    };
    this.autocomplete.getPlacePredictions(request, (pred, status) => {
      this.items.splice(0, this.items.length);
      var i = 0;
      for (let entry of pred) {
        if (i < 4)
          this.items.push(entry);
        i++;
      }
    });
  }

  buttonListener(item: any) {
    this.placesDetails.getDetails({ placeId: item.place_id }, (result, status) => {
      console.log(result.address_components);
      this.map.setCenter(result.geometry.location);
      this.moveMarker(result.geometry.location);
    });
  }

  moveMarker(location: any) {
    if (this.marker == null) {
      this.marker = new google.maps.Marker({
        position: location,
        animation: google.maps.Animation.DROP,
        map: this.map
      });
    }
    else
      this.marker.setPosition(location);
  }

  gpsRefresh() {
    this.geo.getCurrentPosition()
      .then(position => {
        let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        this.map.setCenter(latLng);
        this.moveMarker(latLng);
      }, (err) => {
        console.log('GPS non attivato');
      });
  }

  selectPlace() {
    //this.share.setPlace('test');
    //this.scraper.testfun();
  }
}
