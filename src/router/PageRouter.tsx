import React,{Suspense} from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "../page/Login/Login";
import Page404 from "../page/Page404/Page404";
import Home from "../page/Home/Home";
// const HomeLazy = React.lazy(()=>import('../page/Home/Home'))
export default () => (
  <Router>
    {/*<Suspense fallback={<div>loading...</div>}>*/}
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/app" push />} />
      <Route path="/app" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/404" component={Page404} />
    </Switch>
    {/*</Suspense>*/}
  </Router>
);
