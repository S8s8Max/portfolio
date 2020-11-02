import React, { Component } from "react";
import { Route, Router, Switch } from "react-router-dom";
import Portfolio from "./components/Portfolio";

const NotFound = () => {
  return (
    <h2>Requested Page Is Not Found</h2>
  )
}

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Portfolio}/>
        <Route component={NotFound}/>
      </Switch>
    )
  }
}
export default App;
