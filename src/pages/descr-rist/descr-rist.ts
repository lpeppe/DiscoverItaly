import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { WebScraper } from '../../providers/web-scraper';

/**
 * Generated class for the DescrRistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-descr-rist',
  templateUrl: 'descr-rist.html',
})
export class DescrRistPage {

  view: String = '';
  details: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public scraper: WebScraper) {
  }

  ionViewDidLoad() {
    console.log(this.navParams.get('placeId'))
    this.scraper.getDescrRistoranti(this.navParams.get('placeId'))
    .subscribe(data => {
      this.details = data;
    })
  }

}
