import React from "react";
/* react-redux */
import { connect } from "react-redux";
/* actions */
import { toggleCartHidden } from "./../../redux/cart/cart.actions";
/* reselect */
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "./../../redux/cart/cart.selectors";
/* estilos */
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "./../../assets/shopping-bag.svg";

const CartIcon = ({ itemCount, toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
