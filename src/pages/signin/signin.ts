import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestApiTasseeraProvider} from "../../providers/rest-api-tasseera/rest-api-tasseera";

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  data:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public restApiTasseeraProvider: RestApiTasseeraProvider) {
    this.data.username = '';
    this.data.response = '';
  }

  login() {
    console.log('*********');
    console.log(this.data);
    this.restApiTasseeraProvider.loginUser(this.data).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

}
