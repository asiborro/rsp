import { call, put } from 'redux-saga/effects';
import fetchArticles from '../api/article';
import * as articleActions from '../actions/article';

/* Article Entity
 *
 * const ARTICLE = {
 *   id: 3,
 *   name: 'Article 3',
 *   description: 'Description 3',
 *   price: 19.99,
 *   stock: 10
 * };
 */

// TODO: fetch all articles and publish them to the store
// eslint-disable-next-line no-empty-function
export default function* () {
  const result = yield call(fetchArticles);

  if (result.items) {
    yield put(articleActions.loadArticles(result.items));
  }
}
