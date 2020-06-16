import React, {Component} from 'react'
import './Home.css'
import { Menu, Button } from 'antd';
import {
    AppstoreOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';
import checkUser from "../api/getUser";
import sideBars from '../utils/sideBarConfig'
import SideBar from '../component/SideBar'
import Header from "../component/Header";
import AppRouter from "../router/AppRouter";

const { SubMenu } = Menu;
export default class Home extends Component{
    state = {
        collapsed: false,
        userRole: ''
    };
    componentDidMount() {
        checkUser.checkUser('123').then(res => {
            this.setState({
                userRole: 'admin'
            })
        })
    }

    render() {
        return (
            <div className={'home'}>
                <div style={{ width: 256, height: '100%' }}>
                    <SideBar sideBars={sideBars} role='admin'/>
                </div>
                <div style={{flex: 1}}>
                    <Header/>
                    <AppRouter/>
                </div>
            </div>
        );
    }
}