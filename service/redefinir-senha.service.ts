import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iredefinirSenha } from '../interfaces/iredefinirSenha';

@Injectable({
  providedIn: 'root'
})
export class RedefinirSenhaService {

  private readonly API = "http://localhost:4200/api";



  constructor(private httpClient :HttpClient) { }

    postEmail(email:string):Observable<iredefinirSenha>{
      return this.httpClient.post<iredefinirSenha>(`${this.API}/redefinirsenha/salvar`,email)

    }


}
