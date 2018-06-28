import { call } from 'redux-saga/effects';

import articleSaga from './article';

export default function* () {
  yield call(articleSaga);
}
