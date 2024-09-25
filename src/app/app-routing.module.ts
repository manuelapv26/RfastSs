import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/feature-login/pages/login/login.component';
import { HomeComponent } from './features/feature-login/pages/home/home.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'home',component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
