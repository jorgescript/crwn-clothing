import { createSelector } from "reselect";

/* selecciona cart del root reducer */
const selectCart = (state) => state.cart;

/* selecciona los items dentro de cart */
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

/* selecciona los items dentro de cart y devuelve la suma de la cantidad total de productos */
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

/* selecciona los items dentro de cart y devuelve la suma de los precios */
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);

/* selecciona si la propiedad hidden de cart */
export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);
