// import { all, fork, task, takeLatest, put, delay } from 'redux-saga/effects';

// import {
//   SWITCH_TO_LOGIN_MODAL,
//   CLICK_USER_INFO_BUTTON,
//   OPEN_LOGIN_MODAL,
// } from '../reducers/nav';

// function* switchModal() {
//   yield put({
//     type: CLICK_USER_INFO_BUTTON,
//   });
//   yield put({
//     type: OPEN_LOGIN_MODAL,
//   });
// }

// function* watchSwitchModal() {
//   yield takeLatest(SWITCH_TO_LOGIN_MODAL, switchModal);
// }

// export default function* navSaga() {
//   yield all([fork(watchSwitchModal)]);
// }
