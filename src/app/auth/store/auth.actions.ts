import { Action } from '@ngrx/store';

export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGIN';
export const LOGOUT = 'LOGOUT';

export class Signup implements Action {
  readonly type = SIGNUP;

  constructor(public payload: number) {}
}

export class Signin implements Action {
  readonly type = SIGNIN;

  constructor(public payload: number) { }
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export type AuthActions = Signup | Signin | Logout;
