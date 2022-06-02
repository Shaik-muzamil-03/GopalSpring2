import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import {  Observable } from 'rxjs';
import { Login } from './login';
import { LoginResponse } from './login-response';

@Injectable({
  providedIn: 'root'
})
export class MyAppServiceService {

  rootEndPoint:string = 'http://localhost:8080/home';
  LoginEndpoint:string = this.rootEndPoint+'/user/login';
  constructor(private http:HttpClient) { }

  doLoginAction(loginDetails:Login):Observable<LoginResponse>
  {
    return this.http.post<LoginResponse>(`${this.LoginEndpoint}`,loginDetails);
  }
}
