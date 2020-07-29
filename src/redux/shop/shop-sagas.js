/* redux-saga */
/* firebase */
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "./../../firebase/firebase.utils";
/* redux-saga */
import { takeLatest, call, put, all } from "redux-saga/effects";
/* types */
import shopActionTypes from "./shop.types";
/* actions */
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    /* call es una funcion donse su primer paramtro es la funcion que llamara y los siguentes son los 
    parametros de la misma funcion que se llama */
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    /* put es la version dispatch para uso de sagas */
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
