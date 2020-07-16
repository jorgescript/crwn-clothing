import React from "react";
/* componentes */
import SignIn from "../../components/sign-in/sign-in.comonent";
import SignUp from "../../components/sign-up/sign-up.component";
/* estilos */
import { SignInAndSignUpContainer } from "./sign-in-and-sign-up.styles";

const SignInAndSignUp = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUp;
