import { combineReducers } from 'redux';

import articleReducer from './article';
import cartReducer from './cart';

export default combineReducers({
  article: articleReducer,
  cart: cartReducer
});
