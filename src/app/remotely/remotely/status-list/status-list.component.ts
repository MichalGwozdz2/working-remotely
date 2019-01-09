import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Worker} from '../store/worker';
import * as fromApp from '../../../store/app.reducers';

@Component({
  selector: 'mg-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.scss']
})
export class StatusListComponent implements OnInit {
  workerState: Observable<{workers: Worker[]}>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.workerState = this.store.select('remote');
  }

}
