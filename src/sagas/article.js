import { all, call } from 'redux-saga/effects';
import { normalize } from 'normalizr';
import { articleResponseSchema } from '../schema/article';

import * as articleActions from '../actions/article';

const ARTICLES_ENDPOINT = 'http://localhost:8089/articles';

const ARTICLE = {
  id: 3,
  name: 'Article 3',
  description: 'Description 3',
  price: 19.99,
  stock: 10
};

const apiFetchArticles = () => fetch(
  ARTICLES_ENDPOINT,
  {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json' }),
  })
  .then(res => res.json())
  .then(res => res)
  .catch(error => ({ error }));

function* articleFetchSaga() {}

function* articlePopulateSaga() {}

export default function* () {
  yield all([
    call(articleFetchSaga),
    call(articlePopulateSaga),
  ]);
}
