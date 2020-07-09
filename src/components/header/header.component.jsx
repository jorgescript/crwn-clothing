import React from "react";
/* react-reouter-dom */
import { Link } from "react-router-dom";
/* firebase */
import { auth } from "./../../firebase/firebase.utils";
/* estilos */
import "./header.styles.scss";
import { ReactComponent as Logo } from "./../../assets/crown.svg";

const Header = ({ currentUser }) => (
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
        <Link className="option" to="/signin" onClick={() => auth.signOut()}>
          LOG OUT
        </Link>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
