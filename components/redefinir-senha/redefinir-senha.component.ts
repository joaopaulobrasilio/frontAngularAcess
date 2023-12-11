import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RedefinirSenhaService } from 'src/app/service/redefinir-senha.service';

@Component({
  selector: 'app-redefinir-senha',
  templateUrl: './redefinir-senha.component.html',
  styleUrls: ['./redefinir-senha.component.css']
})
export class RedefinirSenhaComponent {

 formulario! :FormGroup


 constructor(private formBiuler: FormBuilder ,
   private service: RedefinirSenhaService){

 }

 ngOnInit(){
  this.formulario = this.formBiuler.group({
    email:[ null ,Validators.email]
  })
 }

  onSubmit(){
    this.service.postEmail(this.formulario.value).subscribe(
      (sucess)=>{
        console.log(sucess);
      }
    )
   console.log(this.formulario.value);
  }


}
