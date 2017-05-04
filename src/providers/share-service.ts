import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ShareService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ShareService {

  place: string;
  constructor(public http: Http) {
    console.log('Hello ShareService Provider');
  }

  getPlace() {
    return this.place;
  }

  setPlace(place: string) {
    this.place = place;
  }
}
