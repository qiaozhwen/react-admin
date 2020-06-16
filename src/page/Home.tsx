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
import {withRouter} from "react-router-dom";

const { SubMenu } = Menu;
class Home extends Component<any, any>{
    state = {
        collapsed: false,
        userRole: ''
    };
    componentDidMount() {
        console.log('check user');
        // check user
        checkUser.checkUser('123').then((res: any) => {
            if('' === ''){
                this.props.history.push('/login')
            }
            this.setState({
                userRole: 'admin'
            })
        })
    }

    render() {
        return (
            <div className={'home'}>
                <div style={{ width: 256}}>
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
export default withRouter(Home)