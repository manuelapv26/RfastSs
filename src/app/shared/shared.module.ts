import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/molecules/button/button.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { ProfileComponent } from './components/atoms/profile/profile.component';



@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonComponent,
    HeaderComponent,
    ProfileComponent
  ]
})
export class SharedModule { }
