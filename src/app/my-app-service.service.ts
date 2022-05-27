import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {UserDetails} from './login-details';
import {UserDetailsResponse} from './login-details-response';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyAppServiceService {

  rootEndPoint:string = 'http://localhost:8080/home'
  LoginEndpoint:string = this.rootEndPoint+'user/logout'
  constructor(private http:HttpClient) { }

  doLoginAction(loginDetails:UserDetails):Observable<UserDetailsResponse>
  {
    return this.http.post<UserDetailsResponse>(`${this.LoginEndpoint}`,loginDetails);
  }
}
