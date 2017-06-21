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
    this.hostname = 'http://localhost:8080';
  }

  getRemoteData(link) {
    return this.http.get(this.hostname + '/page?link=' + link).map(res => res.json());
  }

  getProdottiTipici(place: string) {
    return this.http.get(this.hostname + '/?loc=' + place).map(res => res.json());
  }

  getLuoghi(place: string) {
    return this.http.get(this.hostname + '/?loc=' + place).map(res => res.json());
  }

  getRistoranti(radius: number) {
    return this.http.get(this.hostname + '/?lat=' + this.share.getLat() + '&lng=' + this.share.getLng() + '&radius=' + radius).map(res => res.json());
  }
}
