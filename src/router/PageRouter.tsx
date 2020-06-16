import React from 'react'
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Login from '../page/Login'
import Page404 from '../page/Page404'
import Home from '../page/Home'

export default () => (
    <Router>
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/app" push/>}/>
            <Route  path="/app" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/404" component={Page404}/>
        </Switch>
    </Router>
)