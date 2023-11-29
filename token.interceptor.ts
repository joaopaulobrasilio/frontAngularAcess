import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';
import { AlertmodelserviceService } from './shared/alertmodelservice.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: LoginService, private router: Router, private alertaService: AlertmodelserviceService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    request = request.clone({
      setHeaders: {
        Token: `${this.auth.get()}`
      }
    })
    console.log(request.headers)

    return next.handle(request).pipe(catchError(
      resp => {

        if (resp instanceof HttpErrorResponse){
          if (resp.status === 401) {
            sessionStorage.clear()
            this.router.navigate(['login']);
            console.log(this.router)
          }
          if(resp instanceof  HttpErrorResponse){
            if(resp.status === 403){
              alert("não tem permisão para acessar essa rota");
            }
          }
      }
      return throwError(() => resp);
    }
    ))
  }


}
