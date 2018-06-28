import * as articleActions from '../actions/article';

export default function (state = [], action) {
  if (action.type === articleActions.LOAD_ARTICLES) {
    return action.articles;
  }
  return state;
}

export const articlesSelector = state => state.article;
