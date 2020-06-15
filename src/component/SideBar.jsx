import React, {Fragment} from 'react'
import {Menu, Button} from 'antd';
import {
    AppstoreOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';
import {withRouter} from "react-router-dom";

const {SubMenu} = Menu;
class SideBar extends React.Component {
    state = {
        collapsed: false,
        userRole: ''
    };

    componentDidMount() {
        this.renderSideBar()
    }

    renderSideBar() {
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    handleClick = (data) => {
        this.props.history.push(data.path)
    };

    render() {
        const {sideBars, role} = this.props;
        return (
            <Fragment>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    style={{height: '100%', background: '#004771', border: 'none'}}
                    inlineCollapsed={this.state.collapsed}
                >
                    {sideBars.map(cur => {
                        return !!cur.children && !!cur.children.length ?
                            cur.roles.indexOf(role) > -1 ?
                                <SubMenu key={`index-${cur.name}-text`} icon={<PieChartOutlined/>} title={cur.name}>
                                    <SideBar sideBars={cur.children} role={role} history={this.props.history}/>
                                </SubMenu> : null
                            :
                            cur.roles.indexOf(role) > -1 ?
                                <Menu.Item key={`index-${cur.name}`} icon={<PieChartOutlined/>}
                                           onClick={()=>{this.handleClick(cur)}}>{cur.name}</Menu.Item> : null
                    })}
                </Menu>
            </Fragment>
        )
    }
}
export default withRouter(SideBar);