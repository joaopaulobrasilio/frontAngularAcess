import { Observable, tap } from "rxjs";
import { ilogin } from "./../interfaces/ilogin";
import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,

} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { iresptoken } from "../interfaces/iresptoken";

import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  private readonly API = "http://localhost:4200/api";

  private storage!: Storage;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.storage = window.sessionStorage;
  }

  get() {
    return this.storage.getItem("token");
  }

  postLogin(login: ilogin): Observable<iresptoken> {
    return this.httpClient
      .post<iresptoken>(`${this.API}/users/logar`, login)
      .pipe(
        tap((resp) => {
          this.storage.setItem("headers", resp.token);
          console.log(resp);
        })
      );
  }

  loginError(value: any) {
    if (value instanceof HttpErrorResponse) {
      if (value.status === 404) {

      }
    }
  }

  navegarParaTelaDeEnvioDeEmail() {
    this.router.navigate(["redefinirsenha"]);
  }
}
