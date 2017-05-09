import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
// import nightmare from 'nightmare';

/*
  Generated class for the WebScraper provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

declare var require;
@Injectable()
export class WebScraper {

  constructor(public http: Http) {
    console.log('Hello WebScraper Provider');

  }

  testfun() {
    // var nightmare = require('nightmare');
    // nightmare.goto('https://duckduckgo.com');

  }

}
