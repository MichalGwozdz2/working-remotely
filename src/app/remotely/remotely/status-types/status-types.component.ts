import { Component, OnInit, OnDestroy } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

import * as fromApp from '../../../store/app.reducers';
import * as fromRemote from '../store/remote.reducers';
import {WorkerStatus} from '../store/worker-status';
import * as RemoteActions from '../store/remote.actions';

@Component({
  selector: 'mg-status-types',
  templateUrl: './status-types.component.html',
  styleUrls: ['./status-types.component.scss']
})
export class StatusTypesComponent implements OnInit, OnDestroy {
  workStatusesState: Subscription;
  filterStatusState: Subscription;

  statuses: WorkerStatus[];
  filterStatus: WorkerStatus;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    const workStatusesObservable: Observable<fromRemote.State> = this.store.select('remote');

    this.workStatusesState = workStatusesObservable
      .pipe(map((state: fromRemote.WorkerStatuses) => state.workStatuses))
      .subscribe((statuses: WorkerStatus[]) => this.statuses = statuses);

    this.filterStatusState = workStatusesObservable
      .pipe(map((state: fromRemote.FilterWorkerStatus) => state.filterWorkerStatus))
      .subscribe((status: WorkerStatus) => this.filterStatus = status);
  }

  onFilterChanges(status: WorkerStatus) {
    if (status && this.filterStatus && status.code === this.filterStatus.code) {
      this.store.dispatch(new RemoteActions.SetFilterStatus(null));
    } else {
      this.store.dispatch(new RemoteActions.SetFilterStatus(status));
    }
  }

  ngOnDestroy() {
    this.workStatusesState.unsubscribe();
    this.filterStatusState.unsubscribe();
  }
}
