import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient,
  HttpResponse,
  HttpResponseBase
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoginService } from '../service/login.service';
import { Router, Routes } from '@angular/router';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {

  constructor(public auth: LoginService , private router : Router) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler)
  : Observable<HttpEvent<any>> {
   request = request.clone({
    setHeaders:{
    Headers: `Token ${this.auth.get()}`

    }

   }
   )
   console.log(request.headers)

    return next.handle(request).pipe(tap(
      resp =>{
       if( resp instanceof HttpResponse)
         if(resp.status === 401){
           console.log(resp)
            sessionStorage.clear()
             this.router.navigate(['login']);
             console.log(this.router)
         }
      }
    ))
    }
  }
