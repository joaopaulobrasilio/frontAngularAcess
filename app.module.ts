

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcessoModule } from './components/acesso/acesso.module';

import { SpinnerComponent } from './components/spinner/spinner.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { NewacessoModule } from './components/new-acessos/newacesso.module';

import { LoginModule } from './components/login/login.module';
import { TokenInterceptor } from './token.interceptor';


import { EditarAcessoModule } from './components/editar-acessos/editar-acesso.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from './shared/shared.module';




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
    SharedModule



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
