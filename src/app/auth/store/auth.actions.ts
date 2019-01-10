import { Action } from '@ngrx/store';
import {AuthenticationError} from './authentication-error';

export const TRY_SIGNUP = 'TRY_SIGNUP';
export const TRY_SIGNIN = 'TRY_SIGNIN';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const LOGOUT = 'LOGOUT';
export const TRY_LOGOUT = 'TRY_LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';

export class TrySignupAction implements Action {
  readonly type = TRY_SIGNUP;

  constructor(public payload: {username: string, password: string}) { }
}

export class TrySigninAction implements Action {
  readonly type = TRY_SIGNIN;

  constructor(public payload: {username: string, password: string}) { }
}

export class AuthenticationErrorAction implements Action {
  readonly  type = AUTHENTICATION_ERROR;

  constructor(public payload: AuthenticationError) { }
}

export class TryLogoutAction implements Action {
  readonly type = TRY_LOGOUT;
}

export class LogoutAction implements Action {
  readonly type = LOGOUT;
}

export class SetTokenAction implements Action {
  readonly type = SET_TOKEN;

  constructor(public payload: string) { }
}

export type AuthActions = TrySigninAction | TrySignupAction | AuthenticationErrorAction | LogoutAction | TryLogoutAction | SetTokenAction;
