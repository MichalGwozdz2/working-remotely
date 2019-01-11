import {Injectable} from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, concatMap, catchError, exhaustMap, mergeMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import * as firebase from 'firebase';
import {Router} from '@angular/router';

import * as AuthActions from './auth.actions';
import {AppRoutes} from '../../routing/app-routes.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthEffects {
  constructor(private actions$: Actions,
              private router: Router) { }

  @Effect()
  authSignin = this.actions$
    .pipe(
      ofType(AuthActions.TRY_SIGNIN),
      map((action: AuthActions.TrySignupAction) => action.payload),
      exhaustMap((authData: {username: string, password: string}) => {
        return from(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password)).pipe(
          switchMap(() => from(firebase.auth().currentUser.getIdToken())),
          mergeMap((token: string) => {
            this.router.navigate([AppRoutes.HOME]);
            return [{
              type: AuthActions.SET_TOKEN,
              payload: token
            }];
          }),
          catchError((error) => {
            return of({
              type: AuthActions.AUTHENTICATION_ERROR,
              payload: error
            });
          })
        );
      }),
    );

  @Effect()
  authSignup = this.actions$
    .pipe(
      ofType(AuthActions.TRY_SIGNUP),
      map((action: AuthActions.TrySignupAction) => action.payload),
      exhaustMap((authData: {username: string, password: string}) => {
        return from(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password)).pipe(
          map(() => firebase.auth().currentUser.getIdToken()),
          mergeMap((token) => {
            this.router.navigate([AppRoutes.HOME]);
            return [{
              type: AuthActions.SET_TOKEN,
              payload: token
            }];
          }),
          catchError((error) => {
            return of({
              type: AuthActions.AUTHENTICATION_ERROR,
              payload: error
            });
          })
        );
      })
    );

  @Effect()
  authSignout = this.actions$
    .pipe(
      ofType(AuthActions.TRY_LOGOUT),
      map(() => {
        firebase.auth().signOut();
        return {
          type: AuthActions.LOGOUT
        };
      })
    );
}
