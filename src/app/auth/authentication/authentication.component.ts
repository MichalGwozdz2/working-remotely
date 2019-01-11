import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';

import * as AuthActions from '../store/auth.actions';
import * as fromAuth from '../store/auth.reducers';
import {AppRoutes} from '../../routing/app-routes.enum';
import {Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {AuthenticationError} from '../store/authentication-error';
import {OnDestroy} from '@angular/core';

@Component({
  selector: 'mg-signup',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit, OnDestroy {
  constructor(private store: Store<fromAuth.State>,
              private router: Router) { }
  authenticationErrorSubscription: Subscription;
  authenticationError: AuthenticationError;

  ngOnInit() {
    this.authenticationErrorSubscription = this.store.select('auth')
      .pipe(map((authState: fromAuth.State) => authState.authenticationError))
      .subscribe((authenticationError: AuthenticationError) => {
        this.authenticationError = authenticationError;
      });
    this.authenticationError = null;
  }

  onInputChanged() {
    if (this.authenticationError && this.authenticationError.code) {
      this.authenticationError.code = null;
    }
  }

  onSubmit(formGroup) {
    const controls = formGroup.form.controls;

    const action = this.isSignup() ?
      new AuthActions.TrySignupAction(
        {username: controls.name.value, password: controls.password.value}
      ) :
      new AuthActions.TrySigninAction(
        {username: controls.name.value, password: controls.password.value}
      );

    this.store.dispatch(action);
  }

  isSignup(): boolean {
    return this.router.url.includes(AppRoutes.SIGNUP);
  }

  private haveAuthenticationErrorIn(message): boolean {
    if (this.authenticationError && this.authenticationError.code && this.authenticationError.code !== null) {
      return this.authenticationError.code.includes(message);
    }
    return false;
  }

  haveAuthenticationErrorInUser(): boolean {
    if (this.authenticationError && this.authenticationError.code && this.authenticationError.code !== null) {
      return this.haveAuthenticationErrorIn('user') || this.haveAuthenticationErrorIn('email');
    }
    return false;
  }

  haveAuthenticationErrorInPassword(): boolean {
    if (this.authenticationError && this.authenticationError.code && this.authenticationError.code !== null) {
      return this.haveAuthenticationErrorIn('password');
    }
    return false;
  }

  ngOnDestroy() {
    this.authenticationErrorSubscription.unsubscribe();
  }

}
