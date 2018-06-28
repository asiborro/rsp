export const ADD_ITEM = '@@cart/ADD_ITEM';
export const addItem = id => ({
  type: ADD_ITEM,
  id
});

export const REMOVE_ITEM = '@@cart/REMOVE_ITEM';
export const removeItem = id => ({
  type: REMOVE_ITEM,
  id
});
