import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './components/task-list/task-list.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    TaskListComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
    