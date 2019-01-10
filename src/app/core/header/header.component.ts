import { Component, OnInit, OnDestroy } from '@angular/core';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

import {AppRoutes} from '../../routing/app-routes.enum';
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

  constructor(private store: Store<fromApp.AppState>,
              private router: Router) { }

  ngOnInit() {
    this.filterSubscription = this.store.select('remote')
      .pipe(map((filterState: fromRemote.FilterWorkerUsername) => filterState.filterWorkerUsername))
      .subscribe((filterWorker: string) => {
        this.filterWorker = filterWorker;
      });

    this.authSubscription = this.store.select('auth')
      .pipe(map((authState: fromAuth.Authenticated) => authState.isAuthenticated))
      .subscribe((isAuthenticated: boolean) => {
        this.isAuthenticated = isAuthenticated;
      });
  }

  isRouterSetOnRemotely(): boolean {
    return this.router.url === '/' + this.appRoutes.REMOTELY;
  }

  logOut() {
    this.store.dispatch(new AuthActions.TryLogout());
  }

  onFilterChange() {
    if (this.filter !== this.filterWorker) {
      this.store.dispatch(new RemoteActions.SetFilterUsername(this.filter));
    }
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
    this.filterSubscription.unsubscribe();
  }

}
