import { takeLatest, call, all, put } from 'redux-saga/effects';
import { novelActions } from '../actions';
import { novelService } from '../services/novel.service';

const { getNovelsRequest, getNovelsSuccess, getNovelsFailure } = novelActions;

function* getNovelsRequestSaga() {
  try {
    yield call([novelService, 'getNovels']);

    yield put(getNovelsSuccess(novelService.decodeToken()));
  } catch (e) {
    yield put(getNovelsFailure());
  }
}

export default function* watchNovelSaga() {
  yield all([takeLatest(getNovelsRequest().type, getNovelsRequestSaga)]);
}
