import React, { Component } from "react";
import Login from "./loginpage";
import Dashboard from "./dashboardpage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export class Routing extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Routing;
