import { Component, OnInit } from '@angular/core';
import * as fromApp from '../../store/app.reducers';
import {Store} from '@ngrx/store';
import * as AuthActions from '../../auth/store/auth.actions';
import {Observable} from 'rxjs';

@Component({
  selector: 'mg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  authState: Observable<{isAuthenticated: boolean}>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  logOut() {
    this.store.dispatch(new AuthActions.Logout());
  }

}
