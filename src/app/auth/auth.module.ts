import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import {AuthRoutingModule} from './auth-routing-module';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {authReducer} from './store/auth.reducers';

@NgModule({
  imports: [
    FormsModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', authReducer)

  ],
  declarations: [
    SigninComponent,
    SignupComponent
  ]
})
export class AuthModule { }
