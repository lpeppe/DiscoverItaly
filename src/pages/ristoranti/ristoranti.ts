import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { WebScraper } from '../../providers/web-scraper';
import { DescrRistPage } from '../descr-rist/descr-rist';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

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
    public scraper: WebScraper, public loadingCtrl: LoadingController,
    private nativePageTransitions: NativePageTransitions) {
  }

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.scraper.getRistoranti(5000)
      .subscribe(data => {
        loading.dismiss();
        this.ristoranti = data
        console.log(this.ristoranti[3].rating)
      })
  }

  openDescr(ristorante: any) {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600,
      slowdownfactor: 3,
      slidePixels: 20,
      iosdelay: 0,
      androiddelay: 0,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 60
    };
    this.nativePageTransitions.flip(options);
    this.navCtrl.push(DescrRistPage, ristorante)
    // console.log(ristorante)
  }
}
