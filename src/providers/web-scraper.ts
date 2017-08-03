import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ShareService } from './share-service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

/*
  Generated class for the WebScraper provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class WebScraper {
  hostname: string;
  constructor(public http: Http, public share: ShareService) {
    this.hostname = 'http://ec2-52-27-85-145.us-west-2.compute.amazonaws.com';
  }

  getProdottiTipici() {
    return this.http.get(this.hostname + ':8084/?regione=' + this.share.regione.toLowerCase()).map(res => res.json()).retry(2);
  }

  getDescrProdottiTipici(link) {
    return this.http.get(this.hostname + ':8084/page?link=' + link).map(res => res.json()).retry(2);
  }

  getLuoghi() {
    return this.http.get(this.hostname + ':8080/?loc=' + this.share.citta).map(res => res.json()).retry();
  }

  getNextLuoghi(placeid: string, page: number) {
    return this.http.get(this.hostname + ':8080/?placeid=' + placeid + '&page=' + page).map(res => res.json()).retry();
  }

  getRistoranti(radius: number) {
    return this.http.get(this.hostname + ':8082/?lat=' + this.share.getLat() + '&lng=' + this.share.getLng() + '&radius=' + radius).map(res => res.json()).retry(2);
  }

  getDescrRistoranti(place_id: string) {
    return this.http.get(this.hostname + ':8082/descr?placeid=' + place_id).map(res => res.json()).retry(2);
  }

  getTaReviews(ris: string) {
    return this.http.get(this.hostname + ':8083/?ris=' + ris + '&citta=' + this.share.getProvincia()).map(res => res.json()).retry();
  }

  getTaNextPage(place_id: string, ris_id: string, page:number) {
    return this.http.get(this.hostname + ':8083/?placeid=' + place_id + '&risid=' + ris_id + "&page=" + page).map(res => res.json()).retry();
  }

  getPlaceDetails(place_id: string) {
    return this.http.get(this.hostname + ':8081/?placeid=' + place_id).map(res => res.json()).retry(2);
  }

  getReverseGeocoding(lat: any, lng: any) {
    return this.http.get(this.hostname + ':8081/reverse?lat=' + lat + "&lng=" + lng).map(res => res.json()).retry(2);
  }

  getDescrAttrazioni(attr: string) {
    console.log(this.hostname + '/wiki?loc=roma&attr='+ attr)
    return this.http.get(this.hostname + ':3000/wiki?loc=roma&attr='+ attr).map(res => res.json());
  }

  getSagre(regione: string,provincia: string,mese :string,index:number) {
    console.log('num = '+index)
    return this.http.get(this.hostname + ':3000/sagre?regione='+regione+'&provincia='+provincia+'&mese='+mese+'&num='+index).map(res => res.json());
  }

  getDescrSagre(url: string) {
    return this.http.get(this.hostname + ':8081/descr?url=' + url).map(res => res.json());
  }

}
