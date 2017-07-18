import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ShareService } from './share-service';
import 'rxjs/add/operator/map';

/*
  Generated class for the WebScraper provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class WebScraper {
  hostname: string;
  constructor(public http: Http, public share: ShareService) {
    // console.log('Hello WebScraper Provider');
    // this.hostname = 'http://192.168.1.103';
    this.hostname = 'http://192.168.1.103';
  }

  getRemoteData(link) {
    return this.http.get(this.hostname + '/page?link=' + link).map(res => res.json());
  }

  getProdottiTipici(place: string) {
    return this.http.get(this.hostname + '/?loc=' + place).map(res => res.json());
  }

  getLuoghi(place: string) {
    return this.http.get(this.hostname + ':8080/?loc=' + place).map(res => res.json());
  }

  getRistoranti(radius: number) {
    // return this.http.get(this.hostname + '/?lat=' + this.share.getLat() + '&lng=' + this.share.getLng() + '&radius=' + radius).map(res => res.json());
    return this.http.get(this.hostname + ':8081/?lat=40.9221604' + '&lng=14.7601241' + '&radius=' + radius).map(res => res.json());
  }

  getDescrRistoranti(place_id: string) {
    return this.http.get(this.hostname + ':8081/descr?placeid=' + place_id).map(res => res.json());
  }
}
