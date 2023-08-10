import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcessoComponent } from './acesso.component';
import { NewAcessosComponent } from '../new-acessos/new-acessos.component';

const routes: Routes = [
  {path: '', component: AcessoComponent},
  {path:'newacesso', component: NewAcessosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcessoRoutingModule { }
