import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HomePageComponent } from './home-page/home-page.component';
import { LeftComponentComponent } from './left-component/left-component.component';


@Injectable({
  providedIn: 'root'
})
export class ProdoctsService {

  selectedProduct:any;
  rootEndpoint:string='http://localhost:8080/store/'
  AllProductsEndPoint:string = this.rootEndpoint+'products';
  private http:HttpClient;
  home:HomePageComponent;
  
  products:any[]=[];
  constructor( http1:HttpClient,home1:HomePageComponent) {
    this.http=http1
    this.home=home1;
    
   }
      
  getAllProducts():Observable<any>{
    return this.http.get<any>(`${this.AllProductsEndPoint}`);

  }

  recieveProduct(obj:any){
    this.selectedProduct=obj;
  }
  cartProduct(obj:any){
    this.products.push(obj);

  }
  arr:any[]=[];
  filterpush(arr1:any[]){
    this.arr=[];
    this.arr=arr1;
    this.home.filterMethod(arr1);



  }

}

