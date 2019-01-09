import { Pipe, PipeTransform, OnDestroy } from '@angular/core';
import {Store} from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import * as fromRemote from '../../remotely/remotely/store/remote.reducers';
import {Worker} from '../../remotely/remotely/store/worker';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform, OnDestroy {
  private workStatusesState: Subscription;
  private filter: string;

  constructor(private store: Store<fromRemote.State>) {
    this.workStatusesState = this.store.select('remote')
      .pipe(
        map((state: fromRemote.FilterWorker) => state.filterWorker))
      .subscribe((filter: string) => {
      this.filter = filter;
    });
  }

  transform(allWorkers: Worker[]): any {
    if (this.filter !== '') {
      return allWorkers.filter((worker: Worker) => {
        return worker.username.includes(this.filter);
      });
    } else {
      return allWorkers;
    }
  }

  ngOnDestroy() {
    this.workStatusesState.unsubscribe();
  }

}
