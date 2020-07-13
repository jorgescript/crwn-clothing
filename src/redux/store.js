/* redux */
import { createStore, applyMiddleware } from "redux";
/* redux-persist */
import { persistStore } from "redux-persist";
/* redux-logger */
import logger from "redux-logger";
/* root-reducer */
import rootReducer from "./root-reducer";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export { store, persistor };
