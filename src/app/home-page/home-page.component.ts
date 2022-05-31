import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { ProdoctsService } from '../prodocts.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  count:number=0;
  @Output() countEvent = new EventEmitter<number>();
  service:ProdoctsService;
  cart:CartService;
  router:Router
  root:string="productInfo";
  arr:any[]=[];

  
  constructor(service1:ProdoctsService,cart1:CartService,router1:Router) { 
      this.service=service1;
      this.cart = cart1;
      this.router=router1;
  }

  sendNumber(name:string,value:string,event:any){
    this.count++
    this.countEvent.emit(this.count);
   this.cart.changeValue(this.count,name);
    this.router.navigate([`${value}`]);
    event.target.disabled=true;
     this.arr.forEach(a=>{
       if(a.name==name){
        this.service.cartProduct(a);
       }
     })

    
    
  }
  getProducts(){
    this.service.getAllProducts().subscribe(data=>{
      console.log(data);
      this.arr=data;
   
      console.log(this.arr);
      
    },error=>{
        console.log(error);
    });
    

}

sendProduct(name:string){
  this.arr.forEach(a=>{
    if(name==a.name){
      this.service.recieveProduct(a);
    }
  });
  this.router.navigate([`${this.root}`]);
  
 


}

filterMethod(arr1:any[]){
  this.arr=[];
  this.arr=arr1;
}


  ngOnInit(): void {
    this.getProducts();
  }

}
