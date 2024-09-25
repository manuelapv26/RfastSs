import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureLoginRoutingModule } from './feature-login-routing.module';
import { FeatureLoginComponent } from './feature-login.component';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { ProfileInformationComponent } from './pages/profile-information/profile-information.component';
import { LaboritoryOrdersComponent } from './pages/laboritory-orders/laboritory-orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';


@NgModule({
  declarations: [
    FeatureLoginComponent,
    LoginComponent,
    HomeComponent,
    ProfileInformationComponent,
    LaboritoryOrdersComponent
  ],
  imports: [
    CommonModule,
    FeatureLoginRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule, // Asegúrate de incluirlo
    RecaptchaModule
  ],
  exports:[
    FeatureLoginComponent,
    LoginComponent,
    HomeComponent,
    ProfileInformationComponent,
    LaboritoryOrdersComponent
  ]
})
export class FeatureLoginModule { }
