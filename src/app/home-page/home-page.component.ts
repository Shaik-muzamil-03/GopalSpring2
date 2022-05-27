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
  arr:any[]=[];
  constructor(service1:ProdoctsService,cart1:CartService,router1:Router) { 
      this.service=service1;
      this.cart = cart1;
      this.router=router1;
  }

  sendNumber(name:string,value:string){
    this.count++
    this.countEvent.emit(this.count);
   this.cart.changeValue(this.count,name);
    this.router.navigate([`${value}`]);
    
    console.log(name);
    
  }
  getProducts(){
    this.service.getAllProducts().subscribe(data=>{
      console.log(data);
      this.arr=data;
    },error=>{
        console.log(error);
    });
    
}


  ngOnInit(): void {
    this.getProducts();
  }

}
