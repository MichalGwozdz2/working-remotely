import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';

import * as AuthActions from '../store/auth.actions';
import * as fromAuth from '../store/auth.reducers';
import {AppRoutes} from '../../routing/app-routes.enum';

@Component({
  selector: 'mg-signup',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  constructor(private store: Store<fromAuth.State>,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(formGroup) {
    const controls = formGroup.form.controls;

    const action = this.isSignup() ?
      new AuthActions.TrySignup(
        {username: controls.name.value, password: controls.password.value}
      ) :
      new AuthActions.TrySignin(
        {username: controls.name.value, password: controls.password.value}
      );

    this.store.dispatch(action);
  }

  isSignup(): boolean {
    return this.router.url.includes(AppRoutes.SIGNUP);
  }

}
