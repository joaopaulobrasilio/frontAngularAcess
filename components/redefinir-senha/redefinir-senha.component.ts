import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RedefinirSenhaService } from 'src/app/service/redefinir-senha.service';
import { AlertmodelserviceService } from 'src/app/shared/alertmodelservice.service';

@Component({
  selector: 'app-redefinir-senha',
  templateUrl: './redefinir-senha.component.html',
  styleUrls: ['./redefinir-senha.component.css']
})
export class RedefinirSenhaComponent {

 formulario! :FormGroup


 constructor(private formBiuler: FormBuilder ,
   private service: RedefinirSenhaService,
private alert : AlertmodelserviceService, private router : Router){

 }

 ngOnInit(){
  this.formulario = this.formBiuler.group({
    email:[ null ,Validators.email]
  })
 }

  onSubmit(){
    this.service.postEmail(this.formulario.value).subscribe(
       { next : ()=>{
        this.resetar();
        this.handerSucess();
       },error : (erro) =>{
        console.log(erro);
         this.handerError();
       }
       }
    )
   console.log(this.formulario.value);
  }

  voltarParaLogin() {
    this.router.navigate(['login']);
  }


  handerError() {
    this.alert.showAlertDanger("Erro ao enviar email,verifique tem novamente!");
  }

  handerSucess() {
    this.alert.showAlertSucess("Email enviado com Sucesso!");
  }

  resetar() {
    return this.formulario.reset();
  }

}
