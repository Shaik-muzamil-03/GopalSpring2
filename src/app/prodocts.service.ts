import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdoctsService {

  rootEndpoint:string='http://localhost:8080/store/'
  AllProductsEndPoint:string = this.rootEndpoint+'products';
  private http:HttpClient;
  constructor( http1:HttpClient) {
    this.http=http1
   }
      
  getAllProducts():Observable<any>{
    return this.http.get<any>(`${this.AllProductsEndPoint}`);

  }
}

