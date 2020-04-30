import { UsersActionTypes } from "../consts";

const {
  LOADING_USERS,
  ERROR_USER_BY_EMAIL,
  GET_USER_BY_EMAIL,
} = UsersActionTypes;

const initialState = {
  //users: [],
  user_by_email: {},
  error: "",
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_USERS:
      return {
        ...state,
        error: "",
        loading: true,
      };
    case ERROR_USER_BY_EMAIL:
      return {
        ...state,
        error: action.payload,
        user_by_email: {},
        loading: false,
      };
    case GET_USER_BY_EMAIL:
      return {
        ...state,
        error: "",
        user_by_email: action.payload,
      };
    default:
      return state;
  }
};

export const selectUserByEmail = (state) => state.user_by_email;
export const selectUserByEmailLoading = (state) => state.loading;