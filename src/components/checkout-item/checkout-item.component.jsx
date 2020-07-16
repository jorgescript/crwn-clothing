import React from "react";
/* react-redux */
import { connect } from "react-redux";
import {
  addItem,
  removeItem,
  clearItemFromCart,
} from "./../../redux/cart/cart.actions";
/* estilos */
import {
  CheckoutItemContainer,
  CheckoutImageContainer,
  CheckoutTextInfo,
  CheckoutTextQuantity,
  CheckoutRemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <CheckoutImageContainer>
        <img src={imageUrl} alt={name} />
      </CheckoutImageContainer>
      <CheckoutTextInfo>{name}</CheckoutTextInfo>
      <CheckoutTextQuantity className="quantity">
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </CheckoutTextQuantity>
      <CheckoutTextInfo className="price">{price}</CheckoutTextInfo>
      <CheckoutRemoveButton onClick={() => clearItem(cartItem)}>
        &#10005;
      </CheckoutRemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
