import {HttpInterceptor, HttpHandler, HttpRequest, HttpEvent} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError, take, switchMap} from 'rxjs/operators';
import {Store} from '@ngrx/store';

import * as fromAuth from '../../auth/store/auth.reducers';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<fromAuth.State>) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select('auth')
      .pipe(
        take(1),
        switchMap((authState: fromAuth.State) => {
          const newReq = req.clone({
              setHeaders: {
                Authorization: `Bearer ${authState.token}`
              }
            });

          return next.handle(newReq);
        }),
        catchError(() => {
          return next.handle(req);
        })
      );
  }
}
