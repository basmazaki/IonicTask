import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Categories } from '../../app/ViewModel/Categories';
import { CategoryDetails } from '../../app/ViewModel/CategoryDetails';
/*
  Generated class for the CategoriesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoriesProvider {
  categories:Categories[];
  constructor(public http: HttpClient) {
    console.log('Hello CategoriesProvider Provider');
  }
getCategories():Observable<Categories[]>

{
  
  return this.http.get<Categories[]>("https://5bcce576cf2e850013874767.mockapi.io/task/categories");
 
}
// getProducts(CatID:number):Observable<CategoryDetails[]>
// {
//   alert(CatID);
//   return this.http.get<CategoryDetails[]>("https://5bcce576cf2e850013874767.mockapi.io/task/categories").pipe(map(res:CategoryDetails) => { if(res.id===CatID)
//   return res;
        
      
//     });

//   }
}



class Response{
  constructor(public data:CategoryDetails[]){}
}