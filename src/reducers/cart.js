import * as cartActions from '../actions/cart';

const initialState = {};

export default function (state = initialState, action) {
  if (action.type === cartActions.ADD_ITEM) {
    return {
      ...state,
      [action.id]: typeof state[action.id] !== 'undefined' ? state[action.id] + 1 : 1
    };
  } else if (action.type === cartActions.REMOVE_ITEM) {
    if (state[action.id] === 1) {
      const newState = { ...state };
      delete newState[action.id];
      return newState;
    }
    return {
      ...state,
      [action.id]: state[action.id] - 1
    };
  }
  return state;
}

export const cartSelector = state => state.cart;

export const allItemsSelector = state => Object.keys(state.cart)
  .map(id => parseInt(id, 10))
  .map(id => ({
    article: state.article.filter(article => article.id === id)[0],
    amount: state.cart[id]
  }));
