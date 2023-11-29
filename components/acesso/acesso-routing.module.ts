import { NgModule } from "@angular/core";
import { RouterModule, Routes, CanActivate } from "@angular/router";

import { AcessoComponent } from "./acesso.component";
import { NewAcessosComponent } from "../new-acessos/new-acessos.component";
import { AuthGuardService } from "src/app/auth-guard.service";
import { EditarAcessosComponent } from "../editar-acessos/editar-acessos.component";

const routes: Routes = [
  { path: "", component: AcessoComponent, canActivate: [AuthGuardService] },

  {
    path: "newacesso",
    component: NewAcessosComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: ":id/editarAcesso",
    component: EditarAcessosComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcessoRoutingModule {}
