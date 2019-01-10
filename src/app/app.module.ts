import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './routing/app-routing.module';
import {AuthModule} from './auth/auth.module';
import {CoreModule} from './core/core.module';
import {AccountModule} from './account/account.module';
import {RemotelyModule} from './remotely/remotely.module';
import {reducers} from './store/app.reducers';
import {AuthEffects} from './auth/store/auth.effects';

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
    ReactiveFormsModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([AuthEffects]),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
