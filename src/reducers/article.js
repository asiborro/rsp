import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import { makeHashReducer, makeArrayReducer } from './helper';
import * as articleActions from '../actions/article';

const initialState = {
  byId: {},
  allIds: []
};

export default combineReducers({
  byId: makeHashReducer(
    initialState.byId,
    'id',
    'article',
    [articleActions.ADD_ARTICLE],
    [articleActions.REMOVE_ARTICLE],
    'data.entities.article',
    articleActions.LOAD_ARTICLES
  ),
  allIds: makeArrayReducer(
    initialState.allIds,
    'article.id',
    articleActions.ADD_ARTICLE,
    articleActions.REMOVE_ARTICLE,
    'data.result.items',
    articleActions.LOAD_ARTICLES
  )
});


export const articlesSelector = state => state.article;

export const allArticlesSelector = createSelector(
  articlesSelector,
  articles =>
    articles.allIds.map(articleId => articles.byId[articleId])
);
