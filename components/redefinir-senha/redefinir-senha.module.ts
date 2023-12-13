import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedefinirSenhaComponent } from './redefinir-senha.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { RedefinirRoutingModule } from './redefinir-routing.module';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    RedefinirSenhaComponent



  ],
  imports: [
    MatInputModule,
    CommonModule,
    MatToolbarModule,
    ReactiveFormsModule,
    RedefinirRoutingModule
  ]

})
export class RedefinirSenhaModule { }
