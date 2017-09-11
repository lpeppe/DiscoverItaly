import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { WebScraper } from '../../providers/web-scraper';

/**
 * Generated class for the DescSagra page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-desc-sagra',
  templateUrl: 'desc-sagra.html',
})

export class DescSagra {
  url : string
  sap : string
  trovato : boolean
  @ViewChild('ionDataContainer') dataContainer: ElementRef;
  @ViewChild('ionSapevate') sapevate: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public scraper: WebScraper) {
  }

  ionViewDidLoad() {
    this.url = this.navParams.get("href");
    this.trovato = false
    let loading = this.loadingCtrl.create({
      content: 'Caricamento...'
    });
    loading.present();
    this.scraper.getDescrSagre(this.navParams.get('href')).subscribe(data => {
      loading.dismiss();
      this.dataContainer.nativeElement.innerHTML = data[0].body;
      this.sap = data[0].sapevate
      console.log(this.sap)
      if(this.sap != null)
          this.sapevate.nativeElement.style.backgroundColor = 'rgb(' + 240 + ',' + 230 + ',' + 140 + ')'
      this.sapevate.nativeElement.innerHTML = data[0].sapevate;
      console.log(data)
    })
  }

}
