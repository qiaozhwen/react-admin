import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Detail from "../page/Detail";
import DashBord from "../page/DashBord";
import PrivateRoute from "../component/PrivateRoute";
import Home from "../page/Home";
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
        () => import(/* webpackChunkName: "Page-DashBord" */ `../page/DashBord`)
      )}
    />
    <PrivateRoute
      exact
      path="/app/detail"
      component={AsyncComponent(
        () => import(/* webpackChunkName: "Page-Detail" */ `../page/Detail`)
      )}
    />
    <PrivateRoute
      exact
      path="/app/test"
      component={AsyncComponent(
        () => import(/* webpackChunkName: "Page-Detail" */ `../page/Test`)
      )}
    />
  </Switch>
);
