import { Injectable } from '@angular/core';
import {Loginuser} from './shared/loginuser';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient) { }
  public login(userInfo:Loginuser): Observable<any>
  {
    localStorage.setItem('ACESS_TOKEN',"access_token");
    return this.http.get(environment.baseUrl+'/logins?user=' +userInfo.email+ '&pass=' +userInfo.password);
  }
  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN')!==null;
  }
  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
