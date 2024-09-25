import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/molecules/button/button.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { ProfileComponent } from './components/atoms/profile/profile.component';
import { ModalDetailsComponent } from './components/templates/modal-details/modal-details.component';
import { FooterComponent } from './components/organisms/footer/footer.component';
import { UserProfileComponent } from './components/molecules/user-profile/user-profile.component';
import { HeaderProfileComponent } from './components/organisms/header-profile/header-profile.component';
import { HomeProfileComponent } from './components/atoms/home-profile/home-profile.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    ProfileComponent,
    ModalDetailsComponent,
    FooterComponent,
    UserProfileComponent,
    HeaderProfileComponent,
    HomeProfileComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    ButtonComponent,
    HeaderComponent,
    ProfileComponent,
    ModalDetailsComponent,
    FooterComponent,
    UserProfileComponent,
    HeaderProfileComponent,
    HomeProfileComponent
  ]
})
export class SharedModule { }
