import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatPaginatorModule} from '@angular/material/paginator';

import { AcessoRoutingModule } from './acesso-routing.module';
import { AcessoComponent } from './acesso.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MeupipePipe } from 'src/app/meupipe.pipe';




@NgModule({
  declarations: [
    AcessoComponent,
    MeupipePipe


  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    AcessoRoutingModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatProgressBarModule



  ],
  exports:[
    MatTableModule,
    AcessoComponent
  ]
})
export class AcessoModule { }
