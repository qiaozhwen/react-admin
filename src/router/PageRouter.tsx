import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "../page/Login/Login";
import Page404 from "../page/Page404/Page404";
import Home from "../page/Home/Home";
// const test = require.context('../testLuyou', true, /.js$/).keys();
// console.log('111111111111111111111111111111111111', test)
export default () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/app" push />} />
      <Route path="/app" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/404" component={Page404} />
    </Switch>
  </Router>
);
