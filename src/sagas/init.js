import { put } from 'redux-saga/effects';

export default function* init() {
  yield put({ type: 'INIT_APP' });
}
