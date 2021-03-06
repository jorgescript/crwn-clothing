import React from "react";
/* estilos */
import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styles";

const WithSpinner = (Component) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <Component {...otherProps} />
  );
};

export default WithSpinner;
