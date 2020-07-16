import React from "react";
/* react-redux */
import { connect } from "react-redux";
/* actions */
import { toggleCartHidden } from "./../../redux/cart/cart.actions";
/* reselect */
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "./../../redux/cart/cart.selectors";
/* estilos */
import {
  CartIconContainer,
  ShoppingIcon,
  ItemCountContainer,
} from "./cart-icon.styles";

const CartIcon = ({ itemCount, toggleCartHidden }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartIconContainer>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
