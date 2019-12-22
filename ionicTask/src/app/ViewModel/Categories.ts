import { Img } from "ionic-angular";
import { CategoryDetails } from "./CategoryDetails";

export class Categories
{
    constructor(public id:number,
        public name:string,
        public category_img:Img,
        public products:CategoryDetails[])
    {}
}