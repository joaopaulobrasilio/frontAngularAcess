import { AlertmodelserviceService } from "./../../shared/alertmodelservice.service";
import { BsModalRef } from "ngx-bootstrap/modal";

import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NewAcessoService } from "src/app/service/new-acesso.service";


@Component({
  selector: "app-new-acessos",
  templateUrl: "./new-acessos.component.html",
  styleUrls: ["./new-acessos.component.css"],
})
export class NewAcessosComponent {
  formulario!: FormGroup;
  bsModalRef!: BsModalRef;

  constructor(
    private formBuilder: FormBuilder,
    private newacesso: NewAcessoService,
    private alertService: AlertmodelserviceService
  ) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      login: [null, Validators.required, Validators.min(4), Validators.max(8)],
      senha: [null, Validators.required],
      descricao: [null],
    });
    this.resetar();
  }

  onSubmit() {
    this.newacesso.postAcesso(this.formulario.value).subscribe(() => {
      success: {
        this.handerSucess();

        this.resetar();
      }
      error: () => {
        this.handerError();
        console.log();
      };
    });
  }

  handerError() {
    this.alertService.showAlertDanger("Erro ao criar Acesso!");
  }

  handerSucess() {
    this.alertService.showAlertSucess("Acesso criado com Sucesso!");
  }

  voltarParaAcessos() {
    this.newacesso.voltarParaListaDeAcessos();
  }

  resetar() {
    return this.formulario.reset();
  }
}
