import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { RemotelyComponent } from './remotely/remotely.component';
import { StatusTypesComponent } from './remotely/status-types/status-types.component';
import { StatusListComponent } from './remotely/status-list/status-list.component';
import {remoteReducer} from './remotely/store/remote.reducers';
import {CoreModule} from '../core/core.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    StoreModule.forFeature('remote', remoteReducer)
  ],
  declarations: [
    RemotelyComponent,
    StatusTypesComponent,
    StatusListComponent
  ]
})
export class RemotelyModule { }
