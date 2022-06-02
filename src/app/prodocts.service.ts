import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ProdoctsService {

  selectedProduct:any;
  rootEndpoint:string='http://localhost:8080/store/'
  AllProductsEndPoint:string = this.rootEndpoint+'products';
  private http:HttpClient;

  
  products:any[]=[];
  constructor( http1:HttpClient) {
    this.http=http1
   
    
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
  /*arr:any[]=[];
  filterpush(arr1:any[]){
    this.arr=[];
    this.arr=arr1;
    this.home.filterMethod(arr1);



  }*/

}

