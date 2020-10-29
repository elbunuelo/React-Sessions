import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Summary from "./screens/Summary";
import Products from "./screens/Products";
import Header from "./components/Header";

import "./App.scss";

function App() {
  return (
    <div className="screen">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/summary" component={Summary} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
