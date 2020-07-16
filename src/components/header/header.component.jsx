import React from "react";
/* firebase */
import { auth } from "./../../firebase/firebase.utils";
/* react-redux */
import { connect } from "react-redux";
/* reselect */
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./../../redux/user/user.selectors";
import { selectCartHidden } from "./../../redux/cart/cart.selectors";
/* componentes */
import CartIcon from "./../cart-icon/cart-icon.component";
import CartDropdown from "./../cart-dropdown/cart-dropdown.component";
/* estilos */
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";
import { ReactComponent as Logo } from "./../../assets/crown.svg";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contacts">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink to="/" onClick={() => auth.signOut()}>
          LOG OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? <CartDropdown /> : null}
  </HeaderContainer>
);

/* traer propiedades del estado */
/* createStructuredSelector se encarga de traer el estado y aplicarlo */
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
