import { all, call, put, takeEvery } from 'redux-saga/effects';
import fetchArticles from '../api/article';
import * as articleActions from '../actions/article';
import * as cartActions from '../actions/cart';

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

function* fetchArticlesSaga() {
  const result = yield call(fetchArticles);

  if (result.items) {
    yield put(articleActions.loadArticles(result.items));
  }
}

function* updateArticleStockSaga(inc, action) {
  if (inc) {
    yield put(articleActions.incStock(action.id));
  } else {
    yield put(articleActions.decStock(action.id));
  }
}

export default function* () {
  yield all([
    call(fetchArticlesSaga),
    takeEvery(cartActions.REMOVE_ITEM, updateArticleStockSaga, true),
    takeEvery(cartActions.ADD_ITEM, updateArticleStockSaga, false)
  ]);
}
