import React from "react";
/* react-reouter-dom */
import { Link } from "react-router-dom";
/* estilos */
import "./header.styles.scss";
import { ReactComponent as Logo } from "./../../assets/crown.svg";

const Header = () => (
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
      <Link className="option" to="/shop">
        SHOP
      </Link>
    </div>
  </div>
);

export default Header;
