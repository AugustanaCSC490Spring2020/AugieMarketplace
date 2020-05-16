import { combineReducers } from 'redux';
import auth, * as fromAuth from './auth';
import items, * as fromItems from './items';
import users, * as fromUsers from './users';

export default combineReducers({
  items, users, auth,
});

// token
export const selectLoggingIn = (state) => fromAuth.selectLoggingIn(state.auth);
export const selectFirebaseToken = (state) => fromAuth.selectFirebaseToken(state.auth);

//items
export const selectItems = (state) => fromItems.selectItems(state.items);
export const selectItemsLoading = (state) => fromItems.selectItemsLoading(state.items)

// item by id
export const selectItemById = (state) => fromItems.selectItemById(state.items);
export const selectItemByIdLoading = (state) => fromItems.selectItemByIdLoading(state.items);