import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WebScraper provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class WebScraper {

  constructor(public http: Http) {
    // console.log('Hello WebScraper Provider');

  }

  getRemoteData(link) {
    return this.http.get('http://ec2-52-41-141-107.us-west-2.compute.amazonaws.com:8080/page?link=' + link).map(res => res.json());
  }

  getProdottiTipici(place: string) {
    return this.http.get('http://ec2-52-41-141-107.us-west-2.compute.amazonaws.com:8080/?loc=' + place).map(res => res.json());
  }
}
