import { Component, OnInit, OnDestroy } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

import {Worker} from '../store/worker';
import * as fromApp from '../../../store/app.reducers';
import * as fromRemote from '../store/remote.reducers';
import {AppRoutes} from '../../../routing/app-routes.enum';
import {WorkerStatus} from '../store/worker-status';

@Component({
  selector: 'mg-status-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.scss']
})
export class WorkerListComponent implements OnInit, OnDestroy {
  workerState: Subscription;
  filterUsernameState: Subscription;
  filterStatusState: Subscription;

  filterUsername: string;
  filterStatus: WorkerStatus = null;
  workerList: Array<Worker> = [];

  constructor(private store: Store<fromApp.AppState>,
              private router: Router) { }

  ngOnInit() {
    const workerObservable: Observable<fromRemote.State> = this.store.select('remote');
    this.workerState = workerObservable
      .pipe(map((state: fromRemote.State) => state.workers))
      .subscribe((workers: Worker[]) => {
        this.workerList = workers;
      });

    this.filterUsernameState = workerObservable
      .pipe(map((state: fromRemote.State) => state.filterWorkerUsername))
      .subscribe((filter: string) => {
        this.filterUsername = filter;
      });

    this.filterStatusState = workerObservable
      .pipe(map((state: fromRemote.State) => state.filterWorkerStatus))
      .subscribe((filter: WorkerStatus) => {
        this.filterStatus = filter;
      });
  }

  openWorker(worker: Worker) {
    this.router.navigate(['/' + AppRoutes.ACCOUNT, worker.index]);
  }

  ngOnDestroy() {
    this.filterUsernameState.unsubscribe();
    this.filterStatusState.unsubscribe();
    this.workerState.unsubscribe();
  }

}
