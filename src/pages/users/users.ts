import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    this.text = 'hi';
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Users');
  }

}
