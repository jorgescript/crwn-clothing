import React from "react";
/* estilos */
import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleButton, ...otherProps }) => (
  <button
    className={`custom-button ${isGoogleButton ? "googleButton" : ""}`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
