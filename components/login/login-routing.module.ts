import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { AuthGuardService } from 'src/app/auth-guard.service';

const routes: Routes = [
  {path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class LoginRoutingModule { }
