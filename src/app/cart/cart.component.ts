import { Component, Inject, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
   service:CartService
   num:number;
   products:string[]=[];

 

  constructor(service1:CartService) { 
    this.service=service1;
    this.num = this.service.value;
    for(let i=0; i<this.num;i++){
      let name =this.service.products[i].name;
      this.products[i]=name;
      console.log(this.products[i]);
    }
   
  }

  


  ngOnInit(): void {
  }
 
}


