import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { WebScraper } from '../../providers/web-scraper';
import { Platform } from 'ionic-angular';
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
import { CallNumber } from '@ionic-native/call-number';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { PhotoViewer } from '@ionic-native/photo-viewer';

/**
 * Generated class for the DescrRistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-descr-rist',
  templateUrl: 'descr-rist.html',
})
export class DescrRistPage {

  mapPromise: any;
  view: String = 'info';
  details: any;
  reviews: any;
  hasNext: boolean;
  loaded: boolean;
  placeId: string;
  risId: string;
  page: number;
  map: GoogleMap;
  @ViewChild('map2') mapDiv: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public scraper: WebScraper, public platform: Platform,
    private googleMaps: GoogleMaps, private callNumber: CallNumber,
    private launchNavigator: LaunchNavigator, private photoViewer: PhotoViewer) {
  }

  ngAfterViewInit() {
    this.platform.ready().then(() => {
      this.loadMap();
    })
  }

  loadMap() {
    this.map = this.googleMaps.create(this.mapDiv.nativeElement);
    this.mapPromise = this.map.one(GoogleMapsEvent.MAP_READY)
      .then(_ => {
        this.map.setClickable(false);
        this.map.setVisible(true);
      })
  }

  ionViewDidLoad() {
    console.log(this.navParams)
    this.page = 0;
    this.loaded = false;
    this.scraper.getDescrRistoranti(this.navParams.get('placeId'))
      .subscribe(data => {
        console.log(data)
        this.details = data;
        this.reviews = this.details.reviews;
        this.mapPromise.then(_ => {
          let position: CameraPosition = {
            target: {
              lat: data.lat,
              lng: data.lng
            },
            zoom: 18,
            tilt: 30
          };
          let latlng: ILatLng = {
            lat: data.lat,
            lng: data.lng
          }
          let markerOptions: MarkerOptions = {
            position: latlng
          };
          this.map.clear();
          this.map.addMarker(markerOptions).then(_ => this.map.animateCamera(position))
        })
      })
    this.scraper.getTaReviews(this.navParams.get('name'))
      .subscribe(data => {
        this.loaded = true;
        this.placeId = data.placeId;
        this.risId = data.risId;
        this.hasNext = data.hasNext;
        if (this.reviews != undefined)
          this.reviews = this.reviews.concat(data.reviews)
        else
          this.reviews = data.reviews
      })
  }

  scrapeNext(infiniteScroll) {
    if (this.hasNext && this.loaded) {
      this.page++;
      this.scraper.getTaNextPage(this.placeId, this.risId, this.page)
        .subscribe(data => {
          this.hasNext = data.hasNext;
          this.reviews = this.reviews.concat(data.reviews)
          infiniteScroll.complete();
        })
    }
    else
      infiniteScroll.complete();
  }

  refreshMap() {
    console.log('entered')
    if (this.view == "info") {
      this.loadMap();
    }
  }

  call() {
    this.callNumber.callNumber(this.details.phone, true);
  }

  navigateTo() {
    this.map.getMyLocation()
      .then(loc => {
        let options: LaunchNavigatorOptions = {
          start: [loc.latLng.lat, loc.latLng.lng]
        };
        this.launchNavigator.navigate([this.details.lat, this.details.lng], options)
          .then(
          success => console.log('Launched navigator'),
          error => console.log('Error launching navigator', error)
          );
      })
  }

  openImg(event: any) {
    this.photoViewer.show(event.path[0].currentSrc);
  }
}
