import { AuthActionTypes } from '../consts';

const { LOADING_AUTH, LOG_IN, LOG_OUT } = AuthActionTypes;

const initialState = {
  accessToken: '',
  loggingIn: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case LOADING_AUTH:
    return {
      ...state,
      loggingIn: true,
    };
  case LOG_IN:
    return {
      ...state,
      loggingIn: false,
      accessToken: action.payload,
    };
  case LOG_OUT:
    return {
      ...state,
      accessToken: '',
    };
  default:
    return state;
  }
};

export const selectAccessToken = (state) => (state.accessToken);

export const selectLoggingIn = (state) => (state.loggingIn);
