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
  image : string
  name : string
  title : string
  @ViewChild('ionDataContainer') dataContainer: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public scraper: WebScraper) {
  }

  ionViewDidLoad() {
    console.log('sto qua');
    this.image = this.navParams.get("img")
    this.name = this.navParams.get("nome")
    this.title = this.navParams.get("nome")
    //this.name = this.name.replace(" ","_")
    this.name = replaceAll(this.name," ","+")
    this.name = replaceAll(this.name,"'","%27")
    console.log(this.name)
    let loading = this.loadingCtrl.create({
      content: 'Caricamento...'
    });
    loading.present();
    this.scraper.getDescrAttrazioni(this.name).subscribe(data => {
      loading.dismiss();
      console.log('controllo data')
      console.log(data)

      this.dataContainer.nativeElement.innerHTML = data[0].attr;

    }, (error) => {
      loading.dismiss();
      console.log(error);
    })
  }

}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}
