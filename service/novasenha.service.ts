import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { iresptoken } from '../interfaces/iresptoken';
import { itokenRedef } from '../interfaces/itokenRedef';

@Injectable({
  providedIn: 'root'
})
export class NovasenhaService {

  private readonly API = "http://localhost:4200/api";

  constructor(private httpClient: HttpClient, private router: Router) {

  }



   validarToken(token :string ){
    return this.httpClient.post<string>(`${this.API}/redefinirsenha/validar`,token);
   }



}
