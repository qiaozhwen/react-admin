import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Detail from '../page/Detail'
import DashBord from '../page/DashBord'
import PrivateRoute from '../component/PrivateRoute'
import Home from '../page/Home'
export default () => (
        <Switch>
            <PrivateRoute exact path="/app/dash-bord" component={DashBord} />
            <PrivateRoute exact path="/app/detail" component={Detail} />
        </Switch>
)