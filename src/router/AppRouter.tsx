import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Detail from "../page/Detail/Detail";
import DashBord from "../page/DashBord/DashBord";
import PrivateRoute from "../component/PrivateRoute/PrivateRoute";
import Home from "../page/Home/Home";
import AsyncComponent from "../component/AsyncComponent/AsyncComponent";
import Test from "../page/Test/Test";

function load(component: any) {
  return import(`../page/${component}`);
}
export default () => (
  <Switch>
    <PrivateRoute
      exact
      path="/app/dash-bord"
      component={DashBord}
    />
    <PrivateRoute
      exact
      path="/app/detail"
      component={Detail}
    />
    <PrivateRoute
      exact
      path="/app/test"
      component={Test}
    />
  </Switch>
);
