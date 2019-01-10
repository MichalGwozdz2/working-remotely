import * as AuthActions from './auth.actions';
import {AuthenticationError} from './authentication-error';

export interface State {
  isAuthenticated: boolean;
  authenticationError: AuthenticationError;
  token: string;
}

const initialState: State = {
  isAuthenticated: false,
  authenticationError: null,
  token: null
};

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case(AuthActions.LOGOUT):
      return {
        ...state,
        token: null,
        authenticationError: null,
        isAuthenticated: false
      };
    case (AuthActions.SET_TOKEN):
      return {
        ...state,
        token: action.payload,
        authenticationError: null,
        isAuthenticated: true
      };
    case (AuthActions.AUTHENTICATION_ERROR):
      return {
        ...state,
        token: null,
        authenticationError: action.payload,
        isAuthenticated: false
      };
    default:
      return {...state};
  }
}
