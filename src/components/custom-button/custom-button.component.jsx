import React from "react";
/* estilos */
import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isGoogleButton,
  inverted,
  ...otherProps
}) => (
  <button
    className={`custom-button 
    ${isGoogleButton ? "googleButton" : ""} 
    ${inverted ? "inverted" : ""}`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
