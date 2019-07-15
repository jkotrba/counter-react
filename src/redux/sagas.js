import { put, takeEvery, all } from 'redux-saga/effects';
import { addAction } from './actions';

export const delay = (ms) => new Promise(res => setTimeout(res, ms));

// Do the async stuff
export function* addActionAsync(amount) {
  yield delay(1000);
  yield put(addAction(amount));
}

// Watch for async actions
function* watchAddActionAsync() {
  yield takeEvery('ADD_ACTION_ASYNC', addActionAsync )
}

export default function* rootSaga() {
  yield all([
    watchAddActionAsync()
  ]);
}