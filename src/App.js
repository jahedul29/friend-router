import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import UserDetails from "./components/UserDetails/UserDetails";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header></Header>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/user/:id">
          <UserDetails />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
