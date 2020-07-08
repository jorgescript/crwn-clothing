import React from "react";
/* react-router-dom */
import { Route } from "react-router-dom";
/* componentes */
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
    </div>
  );
}

export default App;
