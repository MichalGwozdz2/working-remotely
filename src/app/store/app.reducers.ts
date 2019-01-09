import {ActionReducerMap} from '@ngrx/store';

import * as fromAuth from '../auth/store/auth.reducers';
import * as fromRemote from '../remotely/remotely/store/remote.reducers';

export interface AppState {
  auth: fromAuth.State;
  remote: fromRemote.State;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  remote: fromRemote.remoteReducer
};
