import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Detail from '../page/Detail'
import PrivateRoute from '../component/PrivateRoute'
import Home from '../page/Home'
export default () => (
        <Switch>
            <Route exact path="/app/home" component={Home} />
            <PrivateRoute exact path="/app/detail" component={Detail} />
        </Switch>
)