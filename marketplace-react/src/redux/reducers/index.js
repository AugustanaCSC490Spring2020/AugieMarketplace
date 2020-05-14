import { combineReducers } from 'redux';
import auth, * as fromAuth from './auth';
import items, * as fromItems from './items';
import users, * as fromUsers from './users';

export default combineReducers({
  items, users, auth,
});