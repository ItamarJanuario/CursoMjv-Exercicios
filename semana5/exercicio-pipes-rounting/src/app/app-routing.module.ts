import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './features/contact/pages/contact/contact.component';
import { HomeComponent } from './features/home/pages/home/home.component';

const routes: Routes = [
  { path: '', component:  HomeComponent},
  { path: 'home', component:  HomeComponent},
  { path: 'contact', component:  ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
