import { all, call } from 'redux-saga/effects';

const ARTICLE = {
  id: 3,
  name: 'Article 3',
  description: 'Description 3',
  price: 19.99,
  stock: 10
};

function* articleFetchSaga() {}

function* articlePopulateSaga() {}

export default function* () {
  yield all([
    call(articleFetchSaga),
    call(articlePopulateSaga),
  ]);
}
