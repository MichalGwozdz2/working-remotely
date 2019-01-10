import * as AuthActions from './auth.actions';

export interface Authenticated {
  isAuthenticated: boolean;
}

export interface State {
  isAuthenticated: boolean;
  token: string;
}

const initialState: State = {
  isAuthenticated: false,
  token: null
};

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case(AuthActions.LOGOUT):
      return {
        ...state,
        token: null,
        isAuthenticated: false
      };
    case (AuthActions.SET_TOKEN):
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true
      };
    default:
      return {...state};
  }
}
