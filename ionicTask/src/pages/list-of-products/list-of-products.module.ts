import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListOfProductsPage } from './list-of-products';

@NgModule({
  declarations: [
    ListOfProductsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListOfProductsPage),
  ],
})
export class ListOfProductsPageModule {}
