/* redux */
import { combineReducers } from "redux";
/* redux-persist */
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localstorage
/* reducers */
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

/* root reducer */
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

/* datos guardados en localstorage */
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

export default persistReducer(persistConfig, rootReducer);
