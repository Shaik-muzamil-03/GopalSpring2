import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
value:number=0;
products:Products[]=[];
product:Products={
    name:"",

}
  constructor() { }
  changeValue(val:number,name:string){
    this.product.name=name;
    this.value=val;
    this.products.push(this.product)
      
  }
}
interface Products{
  
  name:string;
}
