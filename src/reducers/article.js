import * as articleActions from '../actions/article';

export default function (state = [], action) {
  if (action.type === articleActions.LOAD_ARTICLES) {
    return action.articles;
  } else if (action.type === articleActions.INC_STOCK) {
    return state.map((article) => {
      if (article.id === action.id) {
        return {
          ...article,
          stock: article.stock + 1
        };
      }
      return article;
    });
  } else if (action.type === articleActions.DEC_STOCK) {
    return state.map((article) => {
      if (article.id === action.id) {
        return {
          ...article,
          stock: article.stock - 1
        };
      }
      return article;
    });
  }
  return state;
}

export const articlesSelector = state => state.article;
