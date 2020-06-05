import { all } from 'redux-saga/effects';
import watchNovelSaga from './novel.saga';

export default function* watchAll() {
  yield all([watchNovelSaga()]);
}
