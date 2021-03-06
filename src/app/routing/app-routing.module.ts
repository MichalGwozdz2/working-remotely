import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from '../core/home/home.component';
import {AccountComponent} from '../account/account/account.component';
import {RemotelyComponent} from '../remotely/remotely/remotely.component';
import {AuthGuard} from '../auth/auth-guard.service';
import {AppRoutes} from './app-routes.enum';
import {WorkerListResolver} from '../remotely/remotely/worker-list/worker-list-resolver.service';

const appRoutes: Routes = [
  {path: '', redirectTo: AppRoutes.HOME, pathMatch: 'full'},
  {path: AppRoutes.HOME, component: HomeComponent},
  {path: AppRoutes.REMOTELY, component: RemotelyComponent, resolve: {workerList: WorkerListResolver}},
  {path: AppRoutes.ACCOUNT, component: AccountComponent,
    canActivate: [AuthGuard], canActivateChild: [AuthGuard],
    children: [
      {
        path: ':id',
        component: AccountComponent
      }
    ]},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
