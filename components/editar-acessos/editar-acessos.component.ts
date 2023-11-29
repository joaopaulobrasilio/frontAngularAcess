import { Component } from "@angular/core";

import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { IAcesso } from "src/app/interfaces/iacesso";
import { AcessoService } from "src/app/service/acesso.service";
import { NewAcessoService } from "src/app/service/new-acesso.service";

@Component({
  selector: "app-editar-acessos",
  templateUrl: "./editar-acessos.component.html",
  styleUrls: ["./editar-acessos.component.css"],
})
export class EditarAcessosComponent {
  formulario!: FormGroup;

  id!: number;
  acesso!: IAcesso;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private service: AcessoService,
    private newacesso: NewAcessoService
  ) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      login: [null],
      senha: [null],
      descricao: [null],
    });

    this.id = this.activatedRoute.snapshot.params["id"];

    this.service.getById(this.id).subscribe((response) => {
      this.formulario.patchValue(response);
    });
  }

  salvarAcessoEditado() {
    this.acesso = this.formulario.value;
    this.service.update(this.id, this.acesso).subscribe(
      (sucesss) => {
        console.log(sucesss + " acesso atualizado com sucesso");
      },

      (error) => {
        console.log(error + "erro ao atualizar acesso");
      }
    );
  }

  voltarParaAcessos() {
    this.newacesso.voltarParaListaDeAcessos();
  }
}
