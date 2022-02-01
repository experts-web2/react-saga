import { put, call, takeEvery, all, delay } from "redux-saga/effects";

export function* incrementAsync() {
  yield delay(3000);
  yield put({ type: "INCREMENT" });
}

export function* increment() {
  yield delay(300);
  yield put({ type: "INCREMENT" });
}

function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", increment);
}

function* incrementAfterThreeSeconds() {
  yield takeEvery("INCREMENT_AFTER_THREE_SECONDS", incrementAsync);
}

export default function* rootSaga() {
  yield all([incrementAfterThreeSeconds(), watchIncrementAsync()]);
}
