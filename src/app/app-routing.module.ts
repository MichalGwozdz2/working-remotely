import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './core/home/home.component';
import {AccountComponent} from './account/account/account.component';
import {RemotelyComponent} from './remotely/remotely/remotely.component';
import {AuthGuard} from './auth/auth-guard.service';
import {AppRoutes} from './app-routes.enum';

const appRoutes: Routes = [
  {path: '', redirectTo: AppRoutes.HOME, pathMatch: 'full'},
  {path: AppRoutes.HOME, component: HomeComponent},
  {path: AppRoutes.ACCOUNT, component: AccountComponent, canActivate: [AuthGuard]},
  {path: AppRoutes.REMOTELY, component: RemotelyComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
