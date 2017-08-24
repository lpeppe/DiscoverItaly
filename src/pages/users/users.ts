import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { ShareService } from '../../providers/share-service';
import { WebScraper } from '../../providers/web-scraper';
import { DescrProd } from '../descr-prod/descr-prod';

/**
 * Generated class for the Users page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class Users {
  prodotti: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public events: Events, private share: ShareService, public scraper: WebScraper, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
      content: 'Caricamento...'
    });
    loading.present();
    // this.scraper.getProdottiTipici()
    //   .subscribe(data => {
    //     loading.dismiss();
    //     this.prodotti = data;
    //   }, error => {
    //     loading.dismiss();
    //   })
    this.scraper.getQcPromise()
    .then(data => {
      loading.dismiss();
      this.prodotti = data;
    })
    .catch(_ => loading.dismiss())
  }

  openDescr(prodotto) {
    this.navCtrl.push(DescrProd, prodotto)
  }
}
