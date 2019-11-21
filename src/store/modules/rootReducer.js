import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import wishlist from './wishlist/reducer';

export default combineReducers({
  auth,
  user,
  wishlist,
});
