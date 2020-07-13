import React from "react";
/* react-router-dom */
import { Route, Switch, Redirect } from "react-router-dom";
/* firebase */
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
/* react-redux */
import { connect } from "react-redux";
/* actions */
import { setCurrentUser } from "./redux/user/user.actions";
/* reselect */
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";

/* componentes */
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUp from "./pages/sign-in-sign-up/sign-in-and-sign-up.component";
import checkoutPage from "./pages/cheackout/checkout.component";

/* estilos */
import "./App.css";

class App extends React.Component {
  unsuscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsuscribeFromAuth = auth.onAuthStateChanged(async (userAut) => {
      if (userAut) {
        const userRef = await createUserProfileDocument(userAut);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: { id: snapShot.id, ...snapShot.data() },
          });
        });
      } else {
        setCurrentUser(null);
      }
    });
  }

  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div>
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
  }
}

/* traer propiedades del estado */
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

/* enviar datos al estado */
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
