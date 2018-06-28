import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import * as cartActions from '../actions/cart';
import { articlesSelector } from './article';

const initialState = {
  byId: {},
  allIds: []
};

const byId = (state = initialState.byId, action) => {
  if (action.type === cartActions.ADD_ITEM) {
    return typeof state[action.item.articleId] !== 'undefined'
      ? {
        ...state,
        [action.item.articleId]: {
          ...action.item, amount: state[action.item.articleId].amount + action.item.amount
        }
      }
      : { ...state, [action.item.articleId]: action.item };
  } else if (action.type === cartActions.REMOVE_ITEM) {
    const { [action.articleId]: __, ...newState } = state;
    return newState;
  }
  return state;
};

const allIds = (state = initialState.allIds, action) => {
  if (action.type === cartActions.ADD_ITEM) {
    return state.indexOf(action.item.articleId) >= 0 ? state : [...state, action.item.articleId];
  } else if (action.type === cartActions.REMOVE_ITEM) {
    return state.filter(id => id !== action.articleId);
  }
  return state;
};

export default combineReducers({
  byId,
  allIds
});

export const cartSelector = state => state.cart;

export const allItemsSelector = createSelector(
  articlesSelector,
  cartSelector,
  (articles, items) =>
    items.allIds.map(articleId => ({
      ...items.byId[articleId],
      ...articles.byId[articleId]
    }))
);
