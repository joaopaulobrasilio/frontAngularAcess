import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NewAcessoService {

  constructor(private router: Router) { }



   voltarParaListaDeAcessos(){
    this.router.navigate(['acessos'])
   }
}
