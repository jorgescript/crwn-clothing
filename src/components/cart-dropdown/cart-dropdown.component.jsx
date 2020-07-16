import React from "react";
/* react-router-dom */
import { withRouter } from "react-router-dom";
/* react-redux */
import { connect } from "react-redux";
import { toggleCartHidden } from "./../../redux/cart/cart.actions";
/* reselect */
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "./../../redux/cart/cart.selectors";
/* componentes */
import CustomButton from "./../custom-button/custom-button.component";
import CartItem from "./../cart-item/cart-item.component";
/* estilos */
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
  CartDropdownButton,
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <CartDropdownButton
      inverted
      onClick={() => {
        history.push("/checkout");
        /* cuando damos click en el boton llamamos toggleCartHidden para que cierre el dropdown */
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
/* sino mandamos el segundo argumento a connect, dispatch es enviado al componente como una propiedad */
export default withRouter(connect(mapStateToProps)(CartDropdown));
