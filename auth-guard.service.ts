import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private authservice : AuthService, private router: Router) {

   }


   canActivate():boolean{
    if(!this.authservice.isAuthentication()){
      this.router.navigate(['login']);
      return false;
    }
    return true;
   }
}
