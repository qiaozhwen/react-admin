import { Breadcrumb } from 'antd';
import React from 'react'
import './Header.css'
export default class Header extends React.Component{
    render() {
        return(
            <div className={'header'}>
                <Breadcrumb style={{marginLeft: '10px'}}>
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">订单列表</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">详情</a>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
        )
    }
}