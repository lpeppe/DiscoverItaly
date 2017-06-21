import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {AutoCompleteService} from 'ionic2-auto-complete';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

declare var google;
/*
  Generated class for the Autocomplete provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Autocomplete implements AutoCompleteService {
  labelAttribute = "description";
  autocomplete: any;
  constructor(public http: Http) {
    this.autocomplete = new google.maps.places.AutocompleteService();
  }

  getResults(keyword: string) {
    var request = {
      input: keyword,
      componentRestrictions: { country: 'it' },
    };
    return new Observable(observer => {
      this.autocomplete.getPlacePredictions(request, (pred, status) => {
        if(pred != null)
          observer.next(pred);
      })
    });
  }
}
