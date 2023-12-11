import { LoginModule } from './components/login/login.module';


import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AcessoModule } from './components/acesso/acesso.module';
import { NewacessoModule } from './components/new-acessos/newacesso.module';
import { EditarAcessoModule } from './components/editar-acessos/editar-acesso.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from './shared/shared.module';
import { RedefinirSenhaModule } from './components/redefinir-senha/redefinir-senha.module';
import { NovaSenhaModule } from './components/nova-senha/nova-senha.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TokenInterceptor } from './token.interceptor';
import { LoadingInterceptor } from './interceptors/loading.interceptor';





@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AcessoModule,
    NewacessoModule,
    EditarAcessoModule,
    ModalModule.forRoot(),
    SharedModule,
    RedefinirSenhaModule,
    NovaSenhaModule,
    LoginModule



  ],

  providers: [
    {
       provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor,
       multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
