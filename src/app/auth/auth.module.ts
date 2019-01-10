import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import {AuthRoutingModule} from './auth-routing-module';
import {AuthenticationComponent} from './authentication/authentication.component';
import {authReducer} from './store/auth.reducers';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', authReducer)

  ],
  declarations: [
    AuthenticationComponent
  ]
})
export class AuthModule { }
