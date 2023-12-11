import { Component } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { LoginService } from "src/app/service/login.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  formlogin!: FormGroup;
  mostrarLabel!: boolean

  constructor(
    private formBuilder: FormBuilder,
    private service: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    this.formlogin = this.formBuilder.group({
      login: [null],
      password: [null],
    });
  }

  onSubmit() {
    this.service.postLogin(this.formlogin.value).subscribe(
      (resp) => {
        sessionStorage.setItem("token", resp.token);
        this.router.navigate(["acessos"]);
      },
      (error) => {
        this.service.loginError(error);
        this.mostraLabel();
        setTimeout(() => {
          this.esconderLabel();
        }, 1000);
      }
    );

    console.log(this.formlogin.value);
  }

  mostraLabel() {
    this.mostrarLabel = true;
  }

  resetar() {
    return this.formlogin.reset();
  }

  esconderLabel() {
    this.mostrarLabel = false;
  }


  navagarTelaRefinirSenha(){
    return this.service.navegarParaTelaDeEnvioDeEmail();
  }

}
