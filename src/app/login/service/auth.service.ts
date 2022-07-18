import { Injectable } from '@angular/core';
import { Login } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(loginInfo:Login){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }

  isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }

}
