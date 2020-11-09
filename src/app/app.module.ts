import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from './state/reducers/loginReducer';
import { EffectsModule } from '@ngrx/effects';
import { loginEffect } from './state/effects/loginEffects';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { Store } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    WelcomePageComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({loginDetails:loginReducer}),
    EffectsModule.forRoot([loginEffect])
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
