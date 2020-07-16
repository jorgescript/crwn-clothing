/* redux */
import { combineReducers } from "redux";
/* redux-persist */
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localstorage
/* reducers */
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

/* root reducer */
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

/* datos guardados en localstorage */
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

export default persistReducer(persistConfig, rootReducer);
