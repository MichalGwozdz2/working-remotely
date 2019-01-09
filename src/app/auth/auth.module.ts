import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AuthRoutingModule} from './auth-routing-module';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {authReducer} from './store/auth.reducers';
import { StoreModule } from '@ngrx/store';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', authReducer)

  ],
  declarations: [
    SigninComponent,
    SignupComponent
  ]
})
export class AuthModule { }
