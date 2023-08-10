import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { NewAcessosComponent } from './new-acessos.component';
import { FormBuilder, FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
    NewAcessosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,


  ]
})
export class NewacessoModule { }
