import React from "react";
/* react-reouter-dom */
import { Link } from "react-router-dom";
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
import "./header.styles.scss";
import { ReactComponent as Logo } from "./../../assets/crown.svg";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contacts">
        CONTACT
      </Link>
      {currentUser ? (
        <Link className="option" to="#" onClick={() => auth.signOut()}>
          LOG OUT
        </Link>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? <CartDropdown /> : null}
  </div>
);

/* traer propiedades del estado */
/* createStructuredSelector se encarga de traer el estado y aplicarlo */
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
