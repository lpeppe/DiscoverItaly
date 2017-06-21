import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { WebScraper } from '../../providers/web-scraper';
import { Http } from '@angular/http';

/**
 * Generated class for the Ristoranti page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-ristoranti',
  templateUrl: 'ristoranti.html',
})
export class Ristoranti {

  ristoranti: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public scraper: WebScraper, public loadingCtrl: LoadingController, public http: Http) {
  }

  ionViewDidLoad() {
    //this.ristoranti = this.scraper.getRistoranti(2000);
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.scraper.getRistoranti(5000)
    .subscribe(data => {
      loading.dismiss();
      // console.log(data)
      // for(var i in data) {
      //   if(data[i].photo != undefined) {
      //
      //   }
      // }
      this.ristoranti = data
    })
  }
  test() {
    return 'hi'
  }
}
