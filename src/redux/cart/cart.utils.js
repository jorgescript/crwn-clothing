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
