import { Component, OnInit, OnDestroy } from '@angular/core';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

import {AppRoutes} from '../../app-routes.enum';
import * as RemoteActions from '../../remotely/remotely/store/remote.actions';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as fromRemote from '../../remotely/remotely/store/remote.reducers';
import * as AuthActions from '../../auth/store/auth.actions';

@Component({
  selector: 'mg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  readonly appRoutes: any = AppRoutes;
  filterSubscription: Subscription;
  authSubscription: Subscription;

  filterWorker: string;
  filter: string;
  isAuthenticated: boolean;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.filterSubscription = this.store.select('remote')
      .pipe(map((filterState: fromRemote.FilterWorker) => filterState.filterWorker))
      .subscribe((filterWorker: string) => {
        this.filterWorker = filterWorker;
      });

    this.authSubscription = this.store.select('auth')
      .pipe(map((authState: fromAuth.Authenticated) => authState.isAuthenticated))
      .subscribe((isAuthenticated: boolean) => {
        this.isAuthenticated = isAuthenticated;
      });
  }

  logOut() {
    this.store.dispatch(new AuthActions.Logout());
  }

  onFilterChange() {
    if (this.filter !== this.filterWorker) {
      this.store.dispatch(new RemoteActions.SetFilter(this.filter));
    }
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
    this.filterSubscription.unsubscribe();
  }

}
