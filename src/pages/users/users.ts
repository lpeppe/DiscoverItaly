import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { ShareService } from '../../providers/share-service';

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
  text: String;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public events: Events, private share: ShareService) {
    this.text = 'hi';
    console.log(share.getPlace());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Users');
  }

}
