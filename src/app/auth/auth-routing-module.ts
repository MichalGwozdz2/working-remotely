import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {Routes} from '@angular/router';

import {AuthenticationComponent} from './authentication/authentication.component';
import {AppRoutes} from '../routing/app-routes.enum';

const authRoutes: Routes = [
  {path: AppRoutes.SIGNUP, component: AuthenticationComponent},
  {path: AppRoutes.SIGNIN, component: AuthenticationComponent}
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
