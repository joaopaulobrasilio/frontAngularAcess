import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IAcesso } from '../interfaces/iacesso';

@Injectable({
  providedIn: 'root'
})
export class NewAcessoService {
  private readonly API = 'http://localhost:4200/api'
  constructor(private router: Router, private  httpClient : HttpClient) { }

  postAcesso(acesso: any):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

      return this.httpClient.post<IAcesso>(`${this.API}/acessos/salvar`, acesso );

    }


   voltarParaListaDeAcessos(){
    this.router.navigate(['acessos'])
   }
}
