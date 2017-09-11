import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, LoadingController, IonicPage } from 'ionic-angular';
import { WebScraper } from '../../providers/web-scraper';
import { ShareService } from '../../providers/share-service';
import { DescAttr } from '../desc-attr/desc-attr';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;
  htmlResponse: string;
  places: any;
  page: number;
  placeid: string;
  hasNext: boolean;

  @ViewChild('ionDataContainer') dataContainer: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public scraper: WebScraper, public loadingCtrl: LoadingController,
    public share: ShareService) {
  }

  ionViewDidLoad() {
    this.page = 0;
    let loading = this.loadingCtrl.create({
      content: 'Caricamento...'
    });
    if (this.share.isPlaceSelected()) {
      loading.present();
      // this.scraper.getLuoghi()
      //   .subscribe(data => {
      //     loading.dismiss();
      //     this.places = data.places;
      //     this.placeid = data.placeid;
      //     this.hasNext = data.hasNext;
      //   })
      this.scraper.getLuoghiPromise()
        .then(data => {
          console.log('hi')
          loading.dismiss();
          this.places = data.places;
          this.placeid = data.placeid;
          this.hasNext = data.hasNext;
        })
        .catch(_ => console.log('error'))
    }
  }

  scrapeNext(infiniteScroll) {
    if (this.hasNext) {
      this.page += 30;
      this.scraper.getNextLuoghi(this.placeid, this.page)
        .subscribe(data => {
          this.places = this.places.concat(data.places);
          this.hasNext = data.hasNext;
          infiniteScroll.complete();
        })
    }
    else
      infiniteScroll.complete();
  }

  openDescr(luogo: any) {
    console.log(luogo)
    this.navCtrl.push(DescAttr, luogo)
  }

}
