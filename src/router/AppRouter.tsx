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

function load(component: any) {
  return import(`../page/${component}`);
}
export default () => (
  <Switch>
    <PrivateRoute
      exact
      path="/app/dash-bord"
      component={AsyncComponent(
        () => import(/* webpackChunkName: "Page-DashBord" */ `../page/DashBord/DashBord`)
      )}
    />
    <PrivateRoute
      exact
      path="/app/detail"
      component={AsyncComponent(
        () => import(/* webpackChunkName: "Page-Detail" */ `../page/Detail/Detail`)
      )}
    />
    <PrivateRoute
      exact
      path="/app/test"
      component={AsyncComponent(
        () => import(/* webpackChunkName: "Page-Detail" */ `../page/Test/Test`)
      )}
    />
  </Switch>
);
