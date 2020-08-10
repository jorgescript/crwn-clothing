/* redux */
import { createStore, applyMiddleware } from "redux";
/* redux-persist */
import { persistStore } from "redux-persist";
/* redux-logger */
import logger from "redux-logger";
/* redux-saga */
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root.sagas";
/* root-reducer */
import rootReducer from "./root-reducer";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
