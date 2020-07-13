export const addItemToCart = (cartItems, cartItemToAd) => {
  const exidtingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAd.id
  );
  if (exidtingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    return [...cartItems, { ...cartItemToAd, quantity: 1 }];
  }
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const exidtingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  if (exidtingCartItem.quantity === 1) {
    return cartItems.filter(
      (cartItems) => cartItems.id !== cartItemToRemove.id
    );
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
