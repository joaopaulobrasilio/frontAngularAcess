import { IAcesso } from "./../interfaces/iacesso";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, Observable, take, tap } from "rxjs";

import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AcessoService {
  private readonly API = "http://localhost:4200/api";

  constructor(private httpClient: HttpClient, private router: Router) {}

  list(pagina: number, limitePorPagina: number): Observable<any> {
    return this.httpClient.get<IAcesso[]>(this.API + "/acessos",{params:{
      pagina, limitePorPagina }});
  }

  listTotalAcess(){
    return this.httpClient.get(`${this.API}/acessos/totalAcessos`);
  }

  deleteById(id:number): Observable<any> {
    return this.httpClient.delete<IAcesso>(`${this.API }/acessos/${id}`).pipe(take(1))
  }

  getById(id:number): Observable<any>{

    return this.httpClient.get(`${this.API}/acessos/${id}`);
  }


  update( id :number , acesso :IAcesso) : Observable<any>{
     return this.httpClient.put<IAcesso>(`${this.API}/acessos/${id}`,acesso).pipe(take(1));
  }

  redirecionarParaNovoAcesso() {
    this.router.navigate(["newacesso"]);
  }



  redirecionarParaEdicao(id: number) {
    this.router.navigate([`/acessos/${id}/editarAcesso`]);
  }
}
