import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { NovaSenhaComponent } from './nova-senha.component';

const routes : Routes = [
  {path:"" , component: NovaSenhaComponent}
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]

})
export class NovaSenhaRoutingModule { }
