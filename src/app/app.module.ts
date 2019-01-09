import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthModule} from './auth/auth.module';
import {CoreModule} from './core/core.module';
import {AccountModule} from './account/account.module';
import {RemotelyModule} from './remotely/remotely.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    CoreModule,
    AccountModule,
    RemotelyModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
