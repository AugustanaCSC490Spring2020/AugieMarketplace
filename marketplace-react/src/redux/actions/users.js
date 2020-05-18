import { UsersActionTypes } from "../consts";
import Axios from "axios";
import { useSelector } from 'react-redux';
import { selectFirebaseToken } from "../reducers";

const {
    LOADING_USERS,
    ERROR_USERS,
    ERROR_USER_BY_EMAIL,
    CREATE_USER,
    GET_USER_BY_EMAIL,
    UPDATE_AUTH_USER
} = UsersActionTypes;

export const createUser = (email, data) => (dispatch) => {
    dispatch({ type: LOADING_USERS })
    Axios
        .post(`/users/${email}`, data)
        .then((res) => {
            dispatch({
                type: CREATE_USER
            });
        })
        .catch((err) => {
            dispatch({
                type: ERROR_USERS
            });
        });
}

export const updateUser = (email, data) => (dispatch) => {
    dispatch({ type: LOADING_USERS })
    Axios
        .post(`/users`, data)
        .then((res) => {
            dispatch({
                type: UPDATE_AUTH_USER
            });
        })
        .catch((err) => {
            dispatch({
                type: ERROR_USERS
            });
        });
}

export const getUserByEmail = (email) => (dispatch) => {
    dispatch({ type: LOADING_USERS })
    Axios
        .get("/verify/user", {headers: {'Authorization': 'Bearer ' + useSelector(selectFirebaseToken)}})
        .then((res) => {
            dispatch({
                type: GET_USER_BY_EMAIL,
                payload: res.data
            })
        })
        .catch((err) => {
            console.log(err)
            dispatch({
                type: ERROR_USER_BY_EMAIL
            });
        });
}