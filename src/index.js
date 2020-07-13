import React from "react";
import ReactDOM from "react-dom";
/* react-redux */
import { Provider } from "react-redux";
/* store */
import { store, persistor } from "./redux/store";
/* redux-persist */
import { PersistGate } from "redux-persist/integration/react";
/* react-router-dom */
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    {/* Nos da acceso al store en toda la aplicacion */}
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
