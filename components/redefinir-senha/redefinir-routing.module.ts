import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RedefinirSenhaComponent } from './redefinir-senha.component';

const routes : Routes = [
{path: 'redefinirsenha', component: RedefinirSenhaComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]

})
export class RedefinirRoutingModule { }
