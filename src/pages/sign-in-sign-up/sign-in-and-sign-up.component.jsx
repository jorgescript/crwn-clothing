import React from "react";
/* componentes */
import SignIn from "../../components/sign-in/sign-in.comonent";
import SignUp from "../../components/sign-up/sign-up.component";
/* estilos */
import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUp;
