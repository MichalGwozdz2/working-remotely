import * as AuthActions from './auth.actions';

export interface Authenticated {
  isAuthenticated: boolean;
}

export interface State {
  isAuthenticated: boolean;
  loggedWorkerId: number;
}

const initialState: State = {
  isAuthenticated: false,
  loggedWorkerId: -1
};

export function authReducer(state = initialState, action: AuthActions.AuthActions) {

  switch (action.type) {
    case(AuthActions.SIGNIN):
      return {
        ...state,
        loggedWorkerId: action.payload,
        isAuthenticated: true
      };
    case(AuthActions.SIGNUP):
      return {
        ...state,
        loggedWorkerId: action.payload,
        isAuthenticated: true
      };
    case(AuthActions.LOGOUT):
      return {
        ...state,
        loggedWorkerId: -1,
        isAuthenticated: false
      };
    default:
      return state;
  }
}
