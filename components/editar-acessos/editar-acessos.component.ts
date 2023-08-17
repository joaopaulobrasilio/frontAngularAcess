import { Component } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { IAcesso } from 'src/app/interfaces/iacesso';
import { AcessoService } from 'src/app/service/acesso.service';
import { NewAcessoService } from 'src/app/service/new-acesso.service';

@Component({
  selector: 'app-editar-acessos',
  templateUrl: './editar-acessos.component.html',
  styleUrls: ['./editar-acessos.component.css']
})
export class EditarAcessosComponent {


  formulario!: FormGroup


  constructor(private formBuilder: FormBuilder,
    private service :AcessoService, private newacesso :NewAcessoService){

    }
  ngOnInit(){

    this.formulario = this.formBuilder.group({
      login: [null],
      senha: [null],
      descricao:[null]
    });
}

voltarParaAcessos(){
  this.newacesso.voltarParaListaDeAcessos();
 }



}
