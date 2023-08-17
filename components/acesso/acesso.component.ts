
import { AcessoService } from 'src/app/service/acesso.service';
import { Component, Input } from '@angular/core';
import { IAcesso } from 'src/app/interfaces/iacesso';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css']
})
export class AcessoComponent {

  @Input() listAcessos! : Observable<IAcesso[]> ;
   loading :any;

  displayedColumns =  ['login','senha','descrição','dataRegistro','ações', 'novo'];
   loader: any;

  constructor(private acessoService : AcessoService){

  }

  ngOnInit(){
    this.pegarTodos();
  }
   pegarTodos(){
   return this.acessoService.list().pipe(
    (acesso)=> this.listAcessos = acesso

    ).subscribe((resp)=>{
        console.log("batata",resp)
    })


   }


    criarNovoAcesso(){
      this.acessoService.redirecionarParaNovoAcesso()
    }

    enviarParaEdicao(){
      this.acessoService.redirecionarParaEdicao();
    }
}
