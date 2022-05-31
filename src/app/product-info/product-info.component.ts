import { Component, OnInit } from '@angular/core';
import { ProdoctsService } from '../prodocts.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  products:ProdoctsService;

  arr:any;

  constructor(products1:ProdoctsService) {
    this.products=products1;
    this.arr=this.products.selectedProduct;
    
   }

  




   


  ngOnInit(): void {


  }

}
