/* redux-sagas */
import { takeLatest, call, put, all } from "redux-saga/effects";
/* types */
import UserActionTypes from "./../user/user.types";
/* actions */
import { cleartCart } from "./cart.actions";

export function* ClearCartOnSignOut() {
  yield put(cleartCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, ClearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
