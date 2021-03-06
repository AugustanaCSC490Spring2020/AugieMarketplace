export const AuthActionTypes = {
    LOADING_AUTH: 'LOADING_AUTH',
    ERROR_AUTH: 'ERROR_AUTH',
    LOG_IN: 'LOG_IN',
    LOG_OUT: 'LOG_OUT'
}

export const ItemsActionTypes = {
    LOADING_ITEMS: 'LOADING_ITEMS',
    ERROR_ITEMS: 'ERROR_ITEMS',
    ERROR_ITEM_BY_ID: 'ERROR_ITEM_BY_ID',
    //CRUD
    CREATE_ITEM: 'CREATE_ITEM',
    GET_ITEMS: 'GET_ITEMS',
    GET_ITEM_BY_ID: 'GET_ITEM_BY_ID',
    UPDATE_ITEM: 'UPDATE_ITEM',
    DELETE_ITEM: 'DELETE_ITEM',
    SET_QUERY: 'SET_QUERY'
};

export const UsersActionTypes = {
    LOADING_USERS: 'LOADING_USERS',
    ERROR_USERS: 'ERROR_USERS',
    ERROR_USER_BY_EMAIL: 'ERROR_USER_BY_EMAIL',

    CREATE_USER: 'CREATE_USER',
    GET_USER_BY_EMAIL: 'GET_USER_BY_EMAIL',
    UPDATE_AUTH_USER: 'UPDATE_AUTH_USER'
}

export const UIActionTypes = {
    START_LOADING_UI: 'START_LOADING_UI',
    STOP_LOADING_UI: 'STOP_LOADING_UI'

}