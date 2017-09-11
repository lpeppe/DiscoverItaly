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

  citta: string;
  provincia: string;
  regione: string;
  lat: any;
  lng: any;
  luoghi: any;
  placeSelected: boolean;
  constructor(public http: Http) {
    this.placeSelected = false;
  }

  getCitta() {
    return this.citta;
  }

  setCitta(citta: string) {
    this.citta = citta;
  }

  getProvincia() {
    return this.provincia;
  }

  setProvincia(provincia: string) {
    this.provincia = provincia;
  }

  getRegione() {
    return this.regione;
  }

  setRegione(regione: string) {
    this.regione = regione;
  }

  getLat() {
    return this.lat;
  }

  setLat(lat: any) {
    this.lat = lat;
  }

  getLng() {
    return this.lng;
  }

  setLng(lng: any) {
    this.lng = lng;
  }

  isPlaceSelected() {
    return this.placeSelected;
  }

  setPlaceSelected() {
    this.placeSelected = true;
  }
}
