import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { WebScraper } from '../../providers/web-scraper';

/**
 * Generated class for the DescAttr page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-desc-attr',
  templateUrl: 'desc-attr.html',
})
export class DescAttr {

  @ViewChild('ionDataContainer') dataContainer: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public scraper: WebScraper) {
  }

  ionViewDidLoad() {
    console.log('sto qua');
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.scraper.getDescrAttrazioni('villa+d%27este').subscribe(data => {
      loading.dismiss();
      console.log('controllo data')
      console.log(data)

      this.dataContainer.nativeElement.innerHTML = data[0].attr;
    })
  }

}
