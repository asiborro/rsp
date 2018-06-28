import { all, call } from 'redux-saga/effects';

import articleSaga from './article';
import initSaga from './init';

export default function* () {
  yield all([
    call(initSaga),
    articleSaga(),
  ]);
}
