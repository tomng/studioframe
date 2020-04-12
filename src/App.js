import React from "react";
import "./styles.css";

import FramedPhoto from "./FramedPhoto";
import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";

import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  const { loading } = useAuth0();

  /* Need to avoid error on page load */
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" exact>
            <FramedPhoto />
          </Route>
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
        <NavBar />
      </Router>
    </div>
  );
}
