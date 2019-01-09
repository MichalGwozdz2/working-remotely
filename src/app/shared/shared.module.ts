import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilterWorkerByUsernamePipe} from './pipes/filter-worker-by-username.pipe';
import {FilterWorkerByStatusPipe} from './pipes/filter-worker-by-status.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FilterWorkerByStatusPipe,
    FilterWorkerByUsernamePipe
  ],
  exports: [
    FilterWorkerByStatusPipe,
    FilterWorkerByUsernamePipe
  ]
})
export class SharedModule { }
