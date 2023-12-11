import { IAcesso } from "./../../interfaces/iacesso";
import { Router } from "@angular/router";

import { AcessoService } from "src/app/service/acesso.service";
import { Component, Input } from "@angular/core";
import { Observable } from "rxjs";
import { AlertmodelserviceService } from "src/app/shared/alertmodelservice.service";

@Component({
  selector: "app-acesso",
  templateUrl: "./acesso.component.html",
  styleUrls: ["./acesso.component.css"],
})
export class AcessoComponent {
  @Input() listAcessos!: Observable<IAcesso[]>;
  loading: any;
  totalDados!: any;
  pagina: number = 1;
  limitPorPagina: number = 10;
  password = "password";
  botaoFechado = true;
  botaoAberto = true;
  id!:number;


  displayedColumns = [

    "login",
    "senha",
    "descrição",
    "dataRegistro",
    "ações",
    "novo",
  ];
  loader: any;

  constructor(
    private acessoService: AcessoService,
    private alertService: AlertmodelserviceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.botaoFechado = false;
    this.pegarTotalDeDados();
    this.pegarTodos();
  }



  pegarTodos(event: any = { pageSize: 12, pageIndex: 0 }) {
    this.removerScroll();
    return this.acessoService
      .list(event.pageIndex, event.pageSize)
      .pipe((acesso) => (this.listAcessos = acesso))
      .subscribe((resp) => {
        console.log("batata", resp);
      });
  }
  pegarTotalDeDados() {
    return this.acessoService.listTotalAcess().subscribe((resp: any) => {
      this.totalDados = resp.totalDeDados;
      console.log("Calabreso ->", resp);
    });
  }

  pegarPorId(id: number) {
    this.acessoService.getById(id).subscribe((response) => {
      console.log(response);
    });
  }

  deletar(id: number) {
    this.acessoService.deleteById(id).subscribe(
      (resp) => {
        this.pegarTodos();
        this.handerSucess();
      },
      (error) => {
        this.handerError();
      }
    );
  }

  removerScroll() {
    document.body.style.overflow = "hidden";
  }

  handerError() {
    this.alertService.showAlertDanger("Erro ao apagar Acesso!");
  }

  handerSucess() {
    this.alertService.showAlertSucess("Acesso excluido com Sucesso!");
  }

  criarNovoAcesso() {
    this.acessoService.redirecionarParaNovoAcesso();
  }

  irParaLogin() {
    this.router.navigate(["login"]);
  }
  enviarParaEdicao(id: number) {
    this.acessoService.redirecionarParaEdicao(id);
  }
}
