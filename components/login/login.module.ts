import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RedefinirSenhaComponent } from '../redefinir-senha/redefinir-senha.component';




@NgModule({
  declarations: [
LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule

  ],
  exports:[
  LoginComponent
  ]
})
export class LoginModule { }
