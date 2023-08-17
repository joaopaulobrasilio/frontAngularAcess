import { IAcesso } from './../interfaces/iacesso';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, tap } from 'rxjs';

import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AcessoService {
   private readonly API = 'http://localhost:4200/api'

  constructor(private httpClient : HttpClient,  private router : Router) { }

       list():Observable<any>{
        return this.httpClient.get(this.API+ '/acessos')

     }

     postAcesso(acesso: any):Observable<any>{
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

        return this.httpClient.post<IAcesso>(`${this.API}/acessos/salvar`, {headers: headers} );

      }




      redirecionarParaNovoAcesso(){
        this.router.navigate(['newacesso'])
      }


      redirecionarParaEdicao(){
        this.router.navigate(['editarAcesso'])
      }
}
