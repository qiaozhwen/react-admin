import React,{Suspense} from "react";
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

function load(path: any):React.LazyExoticComponent<any> {
  return React.lazy(()=>import(path))
}
const DashBordLazy =  React.lazy(()=>import('../page/DashBord/DashBord'))
const TestLazy = React.lazy(()=>import('../page/Test/Test'))
export default () => (
  <Switch>
    <Suspense fallback={<div>loading</div>}>
    <PrivateRoute
      exact
      path="/app/dash-bord"
      component={DashBord}
    />
    {/*<PrivateRoute*/}
    {/*  exact*/}
    {/*  path="/app/detail"*/}
    {/*  component={<DetailLazy/>}*/}
    {/*/>*/}
    <PrivateRoute
      exact
      path="/app/test"
      component={TestLazy}
    />
    </Suspense>
  </Switch>
);
