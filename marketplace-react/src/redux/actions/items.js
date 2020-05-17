import { ItemsActionTypes } from "../consts";
import Axios from "axios";

const {
    LOADING_ITEMS,
    ERROR_ITEMS,
    ERROR_ITEM_BY_ID,
    CREATE_ITEM,
    GET_ITEMS,
    GET_ITEM_BY_ID,
    UPDATE_ITEM,
    DELETE_ITEM
} = ItemsActionTypes;

export const createItem = (data) => (dispatch) => {
    dispatch({ type: LOADING_ITEMS });
    Axios
        .post('/items', data)
        .then((res) => {
            dispatch({
                type: CREATE_ITEM
            });
        })
        .catch((err) => {
            dispatch({
                type: ERROR_ITEMS
            });
        });
}

export const updateItem = (data, id) => (dispatch) => {
    dispatch({ type: LOADING_ITEMS });
    Axios
    .post(`/items/${id}`, data)
    .then((res) => {
        dispatch({
            type: UPDATE_ITEM
        });
    })
    .catch((err) => {
        dispatch({
            type: ERROR_ITEMS
        });
    });
}

export const deleteItem = (id) => (dispatch) => {
    dispatch({ type: LOADING_ITEMS });
    Axios
    .delete(`/items/${id}`)
    .then((res) => {
        dispatch({
            type: DELETE_ITEM
        });
    })
    .catch((err) => {
        dispatch({
            type: ERROR_ITEMS
        });
    });
}

export const getItems = () => (dispatch) => {
    dispatch({ type: LOADING_ITEMS });
    Axios
        .get('/list/items/all')
        .then((res) => {
            console.log(res.data)
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            });
        })
        .catch((err) => {
            console.log(err)
            dispatch({
                type: ERROR_ITEMS
            });
        });
}

export const getMockItems = (data) => (dispatch) => {
<<<<<<< HEAD
    dispatch({
        type: GET_ITEMS,
        payload: data
    });
=======
    dispatch({ type: LOADING_ITEMS });
    setTimeout(() => {  
        dispatch({
            type: GET_ITEMS,
            payload: data
        });
    }, 1500);
    
>>>>>>> 75db6c9aa84d5d4711fb555733e5750b2cd099e5
}

export const getItemByID = (id) => (dispatch) => {
    dispatch({ type: LOADING_ITEMS });
    Axios
        .get(`./items/${id}`)
        .then((res) => {
            dispatch({
                type: GET_ITEM_BY_ID,
                payload: res.data
            })
        })
        .catch((err) => {
            dispatch({
                type: ERROR_ITEM_BY_ID
            });
        })
}

