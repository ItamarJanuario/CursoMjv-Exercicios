import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaAlunosComponent } from './components/lista-alunos/lista-alunos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    ListaAlunosComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
