import React from "react";
/* estilos */
import {
  CartItemContainer,
  CartItemImg,
  CartItemDeatailsContainer,
  CartItemInfo,
} from "./cart-item.styles";

const CartItem = ({ cartItem: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImg src={imageUrl} alt={name} />
    <CartItemDeatailsContainer>
      <CartItemInfo>{name}</CartItemInfo>
      <CartItemInfo>
        {quantity} x ${price}
      </CartItemInfo>
    </CartItemDeatailsContainer>
  </CartItemContainer>
);

export default CartItem;
