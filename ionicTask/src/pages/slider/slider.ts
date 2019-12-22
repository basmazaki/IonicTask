import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
/**
 * Generated class for the SliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html',
})
export class SliderPage {
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SliderPage');
  }
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    if(currentIndex ===3)
    {
      this.navCtrl.push("HomePage");
    }
    console.log('Current index is', currentIndex);
  }

  

}
