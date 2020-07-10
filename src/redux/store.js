/* redux */
import { createStore, applyMiddleware } from "redux";
/* redux-logger */
import logger from "redux-logger";
/* root-reducer */
import rootReducer from "./root-reducer";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(middlewares));

export default store;
