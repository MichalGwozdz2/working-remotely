import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './routing/app-routing.module';
import {AuthModule} from './auth/auth.module';
import {CoreModule} from './core/core.module';
import {AccountModule} from './account/account.module';
import {RemotelyModule} from './remotely/remotely.module';
import {reducers} from './store/app.reducers';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    CoreModule,
    AccountModule,
    RemotelyModule,
    StoreModule.forRoot(reducers),
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
