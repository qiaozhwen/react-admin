import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import checkUser from '../api/getUser'

export default class PrivateRoute extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            userRole: ''
        }
    }
    componentDidMount() {
        console.log('detail', this.props)
    }

    componentWillMount() {
        checkUser.checkUser('123').then(res => {
            this.setState({
                userRole: 'admin'
            })
        })
    }

    render() {
        let {component: Component, path} = this.props;
        const {userRole} = this.state;
        return <Route exact path={path} component={Component}/>
    }

}