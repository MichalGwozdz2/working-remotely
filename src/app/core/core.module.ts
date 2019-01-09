import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule} from '../app-routing.module';
import { SearchPipe } from './header/search.pipe';
import {ReactiveFormsModule} from '@angular/forms';
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
    SearchPipe
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    SearchPipe
  ]
})
export class CoreModule { }
