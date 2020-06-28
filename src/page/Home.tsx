import React, {Component} from 'react'
import './Home.css'
import { Menu } from 'antd';
import checkUser from "../api/getUser";
import sideBars from '../utils/sideBarConfig'
import SideBar from '../component/SideBar'
import Header from "../component/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from "../router/AppRouter";
import {withRouter} from "react-router-dom";
import Auth from '../component/Auth'

const { SubMenu } = Menu;
class Home extends Component<any, any>{
    state = {
        collapsed: false,
        userRole: ''
    };
    componentDidMount() {
        console.log('check user');
        // check user
        checkUser.testHttp().then((res: any)=>{
            console.log('res111', res)
        }).catch((err: any)=>{
            console.log('err111', err)
        })
    }

    render() {
        return (
            <Auth id={'page-home'}>
                <div className={'home'}>
                    <div style={{ width: 256}}>
                        <SideBar sideBars={sideBars} role='admin'/>
                    </div>
                    <div style={{flex: 1}}>
                        <Header/>
                        <AppRouter/>
                    </div>
                </div>
            </Auth>
        );
    }
}
export default withRouter(Home)