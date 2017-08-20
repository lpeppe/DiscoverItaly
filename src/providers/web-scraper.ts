import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ShareService } from './share-service';
import { CacheService } from "ionic-cache";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the WebScraper provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class WebScraper {
  hostname: string;
  luoghiPromise: any;
  constructor(public http: Http, public share: ShareService, private cache: CacheService) {
    this.hostname = 'http://ec2-34-211-229-249.us-west-2.compute.amazonaws.com';
  }

  getProdottiTipici() {
    // return this.http.get(this.hostname + ':8084/?regione=' + this.share.regione.toLowerCase()).map(res => res.json()).retry(2);
    return this.http.get(this.hostname + ':8090/qc?regione=' + this.share.regione.toLowerCase()).map(res => res.json()).retry(2);
  }

  getDescrProdottiTipici(link) {
    return this.http.get(this.hostname + ':8090/qcpage?link=' + link).map(res => res.json()).retry(2);
  }

  getLuoghi() {
    this.luoghiPromise = this.http.get(this.hostname + ':8090/taattr?loc=' + this.share.citta).map(res => res.json()).retry().toPromise();
  }

  getLuoghiPromise() {
    return this.luoghiPromise;
  }

  getNextLuoghi(placeid: string, page: number) {
    return this.http.get(this.hostname + ':8090/taattr?placeid=' + placeid + '&page=' + page).map(res => res.json()).retry();
  }

  getRistoranti(radius: number) {
    let request = this.http.get(this.hostname + ':8090/ris?lat=' + this.share.getLat() + '&lng=' + this.share.getLng() + '&radius=' + radius).map(res => res.json()).retry(2);
    return this.cache.loadFromObservable(this.share.getLat() + "-" + this.share.getLng(), request);
  }

  getDescrRistoranti(place_id: string) {
    return this.http.get(this.hostname + ':8090/risdescr?placeid=' + place_id).map(res => res.json()).retry(2);
  }

  getTaReviews(ris: string) {
    let request = this.http.get(this.hostname + ':8090/tarev?ris=' + ris + '&citta=' + this.share.getProvincia()).map(res => res.json()).retry();
    return this.cache.loadFromObservable(ris + "-" + this.share.getProvincia(), request);
    // return this.http.get(this.hostname + ':8090/tarev?ris=' + ris + '&citta=' + this.share.getProvincia()).map(res => res.json()).retry();
  }

  getTaNextPage(place_id: string, ris_id: string, page: number) {
    return this.http.get(this.hostname + ':8090/tarev?placeid=' + place_id + '&risid=' + ris_id + "&page=" + page).map(res => res.json()).retry();
  }

  getPlaceDetails(place_id: string) {
    return this.http.get(this.hostname + ':8090/placedet?placeid=' + place_id).map(res => res.json()).retry(2);
  }

  getReverseGeocoding(lat: any, lng: any) {
    return this.http.get(this.hostname + ':8090/placedetrev?lat=' + lat + "&lng=" + lng).map(res => res.json()).retry(2);
  }

  getDescrAttrazioni(attr: string) {
    return this.http.get(this.hostname + ':8090/wiki?loc=' + this.share.citta.toLowerCase() + '&attr=' + attr).map(res => res.json());
    // return this.http.get(this.hostname + ':8090/wiki?loc=roma&attr='+ attr).map(res => res.json());
  }

  getSagre(regione: string, provincia: string, mese: string, index: number) {
    console.log('num = ' + index)
    // return this.http.get(this.hostname + ':3000/sagre?regione='+regione+'&provincia='+provincia+'&mese='+mese+'&num='+index).map(res => res.json());
    return this.http.get(this.hostname + ':8090/sagre?regione=' + this.share.getRegione() + '&provincia=' + this.share.getProvincia() + '&mese=' + mese + '&num=' + index).map(res => res.json());
  }

  getDescrSagre(url: string) {
    // return this.http.get(this.hostname + ':8081/descr?url=' + url).map(res => res.json());
    return this.http.get(this.hostname + ':8090/sagredescr?url=' + url).map(res => res.json());
  }

}
