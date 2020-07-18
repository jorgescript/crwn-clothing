/* redux */
import { createStore, applyMiddleware } from "redux";
/* redux-persist */
import { persistStore } from "redux-persist";
/* redux-logger */
import logger from "redux-logger";
/* redux-thunk */
import thunk from "redux-thunk";
/* root-reducer */
import rootReducer from "./root-reducer";

const middlewares = [logger, thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export { store, persistor };
