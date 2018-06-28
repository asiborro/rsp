export const ADD_ITEM = '@@cart/ADD_ITEM';
export const addItem = (articleId, amount) => ({
  type: ADD_ITEM,
  item: {
    articleId,
    amount
  }
});

export const REMOVE_ITEM = '@@cart/REMOVE_ITEM';
export const removeItem = articleId => ({
  type: REMOVE_ITEM,
  articleId
});
