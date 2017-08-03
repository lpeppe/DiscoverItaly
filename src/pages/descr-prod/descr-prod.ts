import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { WebScraper } from '../../providers/web-scraper';

/**
 * Generated class for the DescrProd page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-descr-prod',
  templateUrl: 'descr-prod.html',
})
export class DescrProd {

  @ViewChild('ionDataContainer') dataContainer: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public scraper: WebScraper) {
  }

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
      content: 'Caricamento...'
    });
    loading.present();
    this.scraper.getDescrProdottiTipici(this.navParams.get('link')).subscribe(data => {
      loading.dismiss();
      this.dataContainer.nativeElement.innerHTML = data.body;
    })
  }

}
