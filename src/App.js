import React, { Component, Fragment } from "react";
import { Route, Link, Switch } from "react-router-dom";

import SingleRoom from "./Pages/SingleRoom";
import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import Errors from "./Pages/Errors";

import "./App.css";
import Navbar from "./components/Navbar";
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route component={Errors} />
        </Switch>
      </Fragment>
    );
  }
}
