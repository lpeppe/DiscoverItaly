import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { WebScraper } from '../../providers/web-scraper';
import { DescSagra } from '../desc-sagra/desc-sagra';
/**
 * Generated class for the Sagre page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sagre',
  templateUrl: 'sagre.html',
})
export class Sagre {
  sagre: any
  myDate: Date;
  index: number;
  bool : boolean;
  @ViewChild('ionDataContainer') dataContainer: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public scraper: WebScraper) {
  }

  ionViewDidLoad() {
    this.bool = true;
    this.index = 0
    var mesi = ["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"];
    this.myDate = new Date()
    console.log(mesi[this.myDate.getMonth()]);
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
        this.index++
          console.log("index "+this.index);
    this.scraper.getSagre("campania","napoli",mesi[this.myDate.getMonth()],this.index).subscribe(data => {
      loading.dismiss();
      this.sagre = data
    })
  }

doInfinite(infiniteScroll){
  var mesi = ["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"];
  this.myDate = new Date()
  console.log(mesi[this.myDate.getMonth()]);

  setTimeout(() => {
    console.log("prima "+this.index);
    this.index++
    console.log("dopo "+this.index);
    this.scraper.getSagre("campania","napoli",mesi[this.myDate.getMonth()],this.index).subscribe(data => {

      console.log(data)
      if(data.length < 10){
        this.bool = false;
      }
      var elem : any;
      for(elem of data){
        console.log(elem)
        this.sagre.push(elem)
      }
    })
    console.log('Async operation has ended'+ this.bool);
    infiniteScroll.complete();
  }, 5000);





}

openDescr(sagra: any) {
  this.navCtrl.push(DescSagra, sagra)
  // console.log(ristorante)
}

}
