/* cart action types */
import cartActionTypes from "./cart.types";

/* abrir o cerrar carrito de compras */
export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

/* añadir un item al carrito */
export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

/* elimar un item del carrito */
export const removeItem = (item) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item,
});

/* limpiar item del carrito */
export const clearItemFromCart = (item) => ({
  type: cartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

/* limpiar todo el carrito */
export const cleartCart = () => ({
  type: cartActionTypes.CLEAR_CART,
});
