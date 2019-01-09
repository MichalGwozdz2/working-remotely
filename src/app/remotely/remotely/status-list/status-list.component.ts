import { Component, OnInit, OnDestroy } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

import {Worker} from '../store/worker';
import * as fromApp from '../../../store/app.reducers';
import * as fromRemote from '../store/remote.reducers';

@Component({
  selector: 'mg-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.scss']
})
export class StatusListComponent implements OnInit, OnDestroy {
  workerState: Subscription;
  filterState: Subscription;

  filter: string;
  workers: Worker[];

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    const workerObservable: Observable<fromRemote.Workers> = this.store.select('remote');
    this.workerState = workerObservable
      .pipe(map((state: fromRemote.State) => state.workers))
      .subscribe((workers: Worker[]) => this.workers = workers);

    const filterObservable: Observable<fromRemote.FilterWorker> = this.store.select('remote');
    this.filterState = filterObservable
      .pipe(map((state: fromRemote.State) => state.filterWorker))
      .subscribe((filter: string) => {
        this.filter = filter;
      });
  }

  ngOnDestroy() {
    this.filterState.unsubscribe();
    this.workerState.unsubscribe();
  }

}
