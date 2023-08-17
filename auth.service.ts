import { LoginService } from './service/login.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( ) { }




  public isAuthentication():boolean{
     if( sessionStorage.getItem('token')){
      return true;
     }
      return false
  }
}
