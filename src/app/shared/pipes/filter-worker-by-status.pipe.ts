import { Pipe, PipeTransform, OnDestroy } from '@angular/core';
import {Store} from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import * as fromRemote from '../../remotely/remotely/store/remote.reducers';
import {Worker} from '../../remotely/remotely/store/worker';
import {WorkerStatus} from '../../remotely/remotely/store/worker-status';

@Pipe({
  name: 'filterWorkerByStatus'
})
export class FilterWorkerByStatusPipe implements PipeTransform, OnDestroy {
  private workStatusesState: Subscription;
  private status: WorkerStatus;

  constructor(private store: Store<fromRemote.State>) {
    this.workStatusesState = this.store.select('remote')
      .pipe(
        map((state: fromRemote.FilterWorkerStatus) => state.filterWorkerStatus))
      .subscribe((status: WorkerStatus) => {
        this.status = status;
      });
  }

  transform(allWorkers: Worker[]): any {
    if (this.status !== null && this.status !== undefined) {
      return allWorkers.filter((worker: Worker) => {
        return worker.status.code === this.status.code;
      });
    } else {
      return allWorkers;
    }
  }

  ngOnDestroy() {
    this.workStatusesState.unsubscribe();
  }

}
