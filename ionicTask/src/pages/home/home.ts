import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { CategoriesProvider } from '../../providers/categories/categories';
import { Categories } from '../../app/ViewModel/Categories';
import { CategoryDetails } from '../../app/ViewModel/CategoryDetails';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  CategoriesList: Categories[];
  products: CategoryDetails[];
  listOfProducts: CategoryDetails[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private CategoriesProvider: CategoriesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.CategoriesProvider.getCategories().subscribe(
      res => {
        this.CategoriesList = res;
        console.log('cat result', this.CategoriesList)
      },
      err => { console.log(err); }
    )

  }
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
  }
  CategoryDetails(catID: number) {
    // alert(catID);
    let cattt = this.CategoriesList.find((cat) => {
      return cat.id === catID;
    }
    );
    this.listOfProducts = cattt.products;
    this.navCtrl.push("ListOfProductsPage", { 'products': this.listOfProducts })

  }


}
