import { Component, Inject, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProdoctsService } from '../prodocts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
   service:CartService
   num:number;
  
   productService:ProdoctsService;
   product:any[]=[];
   


 

  constructor(service1:CartService,service2:ProdoctsService) { 
    this.productService=service2;
    this.service=service1;
    this.num = this.service.value;
    this.product=this.productService.products;
    console.log(this.product);
    

   
   
  }


  


  ngOnInit(): void {
  
  }
 
}


