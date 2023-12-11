import { NovaSenhaComponent } from './nova-senha.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { NovaSenhaRoutingModule } from './nova-senha-routing.module';



@NgModule({
  declarations: [
  NovaSenhaComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    NovaSenhaRoutingModule


  ]
})
export class NovaSenhaModule { }
