import { createSelector } from 'reselect';
import * as cartActions from '../actions/cart';
import { articlesSelector } from './article';

const initialState = {};

export default function (state = initialState, action) {
  if (action.type === cartActions.ADD_ITEM) {
    return {
      ...state,
      [action.id]: typeof state[action.id] !== 'undefined' ? state[action.id] + 1 : 1
    };
  } else if (action.type === cartActions.REMOVE_ITEM) {
    const { [action.articleId]: __, ...newState } = state;
    return newState;
  }
  return state;
}

export const cartSelector = state => state.cart;

export const allItemsSelector = createSelector(
  articlesSelector,
  cartSelector,
  (articles, items) => Object.keys(items)
    .map(id => parseInt(id, 10))
    .map(id => ({
      article: articles.filter(article => article.id === id)[0],
      amount: items[id]
    }))
);
