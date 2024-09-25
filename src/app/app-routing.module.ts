import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/feature-login/pages/login/login.component';
import { HomeComponent } from './features/feature-login/pages/home/home.component';
import { ModalDetailsComponent } from './shared/components/templates/modal-details/modal-details.component';
import { ProfileInformationComponent } from './features/feature-login/pages/profile-information/profile-information.component';
import { LaboritoryOrdersComponent } from './features/feature-login/pages/laboritory-orders/laboritory-orders.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'home',component: HomeComponent},
  {path:'modal',component:ModalDetailsComponent},
  {path:'perfilInformacion',component:ProfileInformationComponent},
  {path:'ordenesLaboratorio',component:LaboritoryOrdersComponent},
  { path: '**', redirectTo: '' } // Redirige cualquier ruta no válida
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
