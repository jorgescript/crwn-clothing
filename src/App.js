import React, { useEffect } from "react";
/* react-router-dom */
import { Route, Switch, Redirect } from "react-router-dom";
/* react-redux */
import { connect } from "react-redux";
/* actions */
import { checkUserSeesion } from "./redux/user/user.actions";
/* reselect */
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";

import { selectCollectionsOverview } from "./redux/shop/shop.selectors";

/* componentes */
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUp from "./pages/sign-in-sign-up/sign-in-and-sign-up.component";
import checkoutPage from "./pages/cheackout/checkout.component";

/* estilos */
import { GloblaStyles } from "./global.styles";

const App = ({ checkUserSeesion, currentUser }) => {
  /* useEfect */
  useEffect(() => {
    checkUserSeesion();
  }, [checkUserSeesion]);

  return (
    <div>
      <GloblaStyles />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/checkout" component={checkoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsOverview,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSeesion: () => dispatch(checkUserSeesion()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
