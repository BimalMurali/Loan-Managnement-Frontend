import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginComponent} from './auth/login/login.component';

const routes: Routes = [
  {path: '',redirectTo:'home',pathMatch:'full'},

  { 
    path: 'home', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
