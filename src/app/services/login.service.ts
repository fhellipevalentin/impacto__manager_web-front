import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from 'src/app/constants/app.constants';
import { environment } from '../../environments/environment';
import { LoginData } from '../model/logindata.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

  }

  validateLoginDetails(loginData: LoginData) {
    window.sessionStorage.setItem("userdetails",JSON.stringify(loginData));
    return this.http.get(environment.rootUrl+AppConstants.LOGIN_API_URL, { observe: 'response',withCredentials: true });
  }

}
