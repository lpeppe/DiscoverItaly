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
    this.http.get('http://ec2-52-25-62-139.us-west-2.compute.amazonaws.com:8080/?loc=avellino').subscribe(data => {
    // this.http.get('https://www.reddit.com/r/gifs/top/.json?limit=10&sort=hot').subscribe(data => {
      console.log(data);
    });
  }

  getRemoteData() {
    console.log('porcodio')
  }

}
