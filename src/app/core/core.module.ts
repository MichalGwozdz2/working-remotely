import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule} from '../routing/app-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
  ]
})
export class CoreModule { }
