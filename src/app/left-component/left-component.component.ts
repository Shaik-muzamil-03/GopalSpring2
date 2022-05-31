import { Component, OnInit } from '@angular/core';
import { ProdoctsService } from '../prodocts.service';

@Component({
  selector: 'app-left-component',
  templateUrl: './left-component.component.html',
  styleUrls: ['./left-component.component.css']
})
export class LeftComponentComponent implements OnInit {

  products:any[]=[];
  arr:any[]=[]
  service:ProdoctsService;
  constructor(service1:ProdoctsService) { 
    this.service =service1;
  }

  tempArray:any[]=[];
  newArray:any[]=[];
  selectedValue(event:any){
    this.tempArray=this.products.filter((e:any)=>e.sportType == event.target.value);
    this.newArray.push(this.tempArray);
    console.log(this.newArray);
    this.arr=[];
    for(let i=0;i<this.newArray.length;i++){
      var firstArray = this.newArray[i];
      for(let i=0;i<firstArray.length;i++){
        var obj = firstArray[i];
        this.arr.push(obj);
      }
      this.service.filterpush(this.arr);
      
    }
    

  }

  ngOnInit(): void {
   
  }

}
