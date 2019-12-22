import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
// import { SplashPage } from '../splash/splash';

/**
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashPage');
    this.presentLoadingCustom();
  }
//  home(){
//    this.navCtrl.push(HomePage)
//  }
  presentLoadingCustom() {
    let loading = this.loadingCtrl.create({
      spinner: 'ios',
      content: `
        <div class="custom-spinner-container">
          <div class="custom-spinner-box"></div>
        </div>`,
      duration: 5000
    });
  

    loading.present();
       setTimeout(() => {
    this.navCtrl.push("SliderPage");
  },7000);
  }


}
