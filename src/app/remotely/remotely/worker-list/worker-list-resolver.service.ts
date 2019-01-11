import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Worker} from '../store/worker';
import {Observable, of} from 'rxjs';
import {take} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {RemotelyService} from '../../remotely.service';
import * as RemoteActions from '../store/remote.actions';
import * as fromRemote from '../store/remote.reducers';

@Injectable({
  providedIn: 'root'
})
export class WorkerListResolver implements Resolve<any> {

  constructor(private remotelyService: RemotelyService,
              private store: Store<fromRemote.State>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<any> | Promise<any> | any {
    this.remotelyService.getWorkerList()
      .pipe(take(1))
      .subscribe((list: Array<Worker>) => {
        this.store.dispatch(new RemoteActions.SetWorkers(list));
      });

    return null;
  }
}
