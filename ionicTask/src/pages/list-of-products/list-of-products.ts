import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CategoryDetails } from '../../app/ViewModel/CategoryDetails';
import { ViewController } from 'ionic-angular';
/**
 * Generated class for the ListOfProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-of-products',
  templateUrl: 'list-of-products.html',
})
export class ListOfProductsPage {
  ListOfProducts: CategoryDetails[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private viewController:ViewController,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.viewController.setBackButtonText('meet&seafood');
    console.log('ionViewDidLoad ListOfProductsPage');
    this.ListOfProducts = this.navParams.get('products');
    console.log(this.ListOfProducts);
  }
 
  showproduct(prdID:number)
  {
    
    let product = this.ListOfProducts.find((prd) => {
      return prd.id === prdID;
      
      
    });

    let alert = this.alertCtrl.create({
      title: product.name,
      subTitle:  product.price+'<br>'+product.weight +''+ '<img [src]=product.product_img>',
      buttons: ['Ok']
    });
    alert.present();
    }
 
   
//  alert(
//   product.name

//  );

  }
 

