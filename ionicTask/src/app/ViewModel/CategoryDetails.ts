import { Img } from "ionic-angular/umd/components/img/img-interface";

export class CategoryDetails
{
    constructor(public id:number,
        public name:string,
        public product_img:Img,
        public weight:number,
        public price:number
        )
    {}
}