import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FeatureLoginComponent } from './features/feature-login/feature-login.component';
import { FeatureLoginModule } from './features/feature-login/feature-login.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FeatureLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
