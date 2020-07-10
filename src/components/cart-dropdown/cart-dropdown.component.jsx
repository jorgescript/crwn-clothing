import React from "react";
/* componentes */
import CustomButton from "./../custom-button/custom-button.component";
/* estilos */
import "./cart-dropdown.styles.scss";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton inverted>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;
