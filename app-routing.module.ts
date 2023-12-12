import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "acessos" },

  { path: "login", component: LoginComponent, pathMatch: "full" },

  {
    path: "acessos",
    loadChildren: () =>
      import("./components/acesso/acesso.module").then((m) => m.AcessoModule),
  },
  {
    path: "redefinirsenha",
    loadChildren: () =>
      import("./components/redefinir-senha/redefinir-senha.module").then(
        (m) => m.RedefinirSenhaModule),
  },
  {
    path: "novasenha",
    loadChildren: () =>
      import("./components/nova-senha/nova-senha.module").then(
        (m) => m.NovaSenhaModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
