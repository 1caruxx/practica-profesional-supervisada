import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public background:string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {

    console.log('ionViewDidLoad LoginPage');
    this.SeleccionarImagenAleatoria();
  }

  SeleccionarImagenAleatoria() {

    this.background = "../../assets/imgs/background" + (Math.floor((Math.random() * (4 - 1) + 1))).toString() + ".jpg";
  }

}
