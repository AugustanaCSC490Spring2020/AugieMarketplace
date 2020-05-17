import { AuthActionTypes } from '../consts';
import Axios from 'axios';

const { LODING_AUTH, LOG_IN, LOG_OUT, ERROR_AUTH } = AuthActionTypes;

<<<<<<< HEAD
export const logout = () => ({ type: LOG_OUT });
=======
export const logout = (dispatch) => dispatch({ type: LOG_OUT });
>>>>>>> 75db6c9aa84d5d4711fb555733e5750b2cd099e5

export const login = (googleToken) => (dispatch) => {
    // dispatch({ type: LODING_AUTH });
    // Axios
    //     .post()
    //     .then((res) => {

    //     })
    //     .catch((err) => {
    //         dispatch({
    //             type: ERROR_AUTH
    //         });
    //     })
    dispatch({type: LOG_IN, payload: googleToken});
};