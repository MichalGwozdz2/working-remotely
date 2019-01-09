import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {Routes} from '@angular/router';

import {SignupComponent} from './signup/signup.component';
import {SigninComponent} from './signin/signin.component';
import {AppRoutes} from '../app-routes.enum';

const authRoutes: Routes = [
  {path: AppRoutes.SIGNUP, component: SignupComponent},
  {path: AppRoutes.SIGNIN, component: SigninComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
