import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureLoginRoutingModule } from './feature-login-routing.module';
import { FeatureLoginComponent } from './feature-login.component';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    FeatureLoginComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FeatureLoginRoutingModule,
    SharedModule
  ],
  exports:[
    FeatureLoginComponent,
    LoginComponent,
    HomeComponent
  ]
})
export class FeatureLoginModule { }
