import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login';
import { LoginResponse } from '../login-response';
import { MyAppServiceService } from '../my-app-service.service';


@Component({
  selector: 'app-top-component',
  templateUrl: './top-component.component.html',
  styleUrls: ['./top-component.component.css']
})
export class TopComponentComponent implements OnInit {
  display:string=""
  homeEndpoint:string="home";
  registerEndpoint:string="Register";
  errorResponse:any;
  constructor(private router:Router,private service:MyAppServiceService) { }
  data:Login = new Login('','');
  responseStatus:LoginResponse=<LoginResponse>{}
  openForm(){
     this.display="block";
  }
  closeForm(){
    this.display="none";
  }
  formSubmit(){
    this.data.saveData(this.data);
    console.log(this.data);
    this.service.doLoginAction(this.data).subscribe((data)=>{
      this.responseStatus=data;
      if(this.responseStatus.username != 'invalid'&&this.responseStatus.role=='User'){
        this.router.navigate([`${this.homeEndpoint}`]);
      }
     
    }
    ,
    error=>{
      this.errorResponse=error;
      alert(this.errorResponse.error.errorMsg + "PLEASE REGISTER");
      this.router.navigate([`${this.registerEndpoint}`]);
    }
    );

  }
  ngOnInit(): void {
  }

}
