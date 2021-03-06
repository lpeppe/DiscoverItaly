import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { WebScraper } from '../../providers/web-scraper';
import { ShareService } from '../../providers/share-service';
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
    private nativePageTransitions: NativePageTransitions, public share: ShareService) {
  }

  ionViewDidLoad() {
    if (this.share.isPlaceSelected()) {
      let loading = this.loadingCtrl.create({
        content: 'Caricamento...'
      });
      loading.present();
      // this.scraper.getRistoranti(2000)
      //   .subscribe(data => {
      //     loading.dismiss();
      //     this.ristoranti = data
      //   })
      this.scraper.getRistPromise()
        .then(data => {
          loading.dismiss();
          this.ristoranti = data;
        })
        .catch(_ => loading.dismiss())
    }
  }

  openDescr(ristorante: any) {
    let options: NativeTransitionOptions = {
      direction: 'right',
      duration: 1000,
      slowdownfactor: 1,
      slidePixels: 20,
      iosdelay: 0,
      androiddelay: 0,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 60
    };
    this.nativePageTransitions.flip(options);
    this.navCtrl.push(DescrRistPage, ristorante)
  }
}
