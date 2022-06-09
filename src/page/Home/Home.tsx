import React, { Component } from "react";
import "./Home.css";
import { Menu,Select    } from "antd";
import checkUser from "../../api/getUser";
import sideBars from "../../utils/sideBarConfig";
import SideBar from "../../component/SideBar/SideBar";
import Header from "../../component/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "../../router/AppRouter";
import { withRouter } from "react-router-dom";
import Auth from "../../component/Auth/Auth";
import {AstcnCmp} from "./asyncCmp";
import {name} from './test'
const Option = Select.Option
// @ts-ignore
// import('./test.js').then(res=>console.log(res,'0000000'))
const { SubMenu } = Menu;
class Home extends Component<any, any> {
  state = {
    collapsed: false,
    userRole: "",
    selectedValue:['china'],
    hasError: false
  };
  componentWillMount() {
    console.log("check user");
    // check user
    checkUser.checkUser().then((res: any) => {
      this.setState({
        userRole: "admin",
      });
    });
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log('55555', error)
  }

   handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
    this.setState((state)=>({
      selectedValue: value.includes('china') ? value:[...value,'china']
    }))
  };
  static getDerivedStateFromError=(err)=>{
    console.log('666666',err)
    return { hasError: true };
  }


  render() {
    if (this.state.hasError) {
      // 你可以渲染任何自定义的降级  UI
      return <h1>Something went wrong.</h1>;
    }
    return (
      <Auth id={"page-home"}>
        <div className={"home"}>
          <div style={{ width: 256 }}>
            <SideBar sideBars={sideBars} role="admin" />
          </div>
          <div style={{ flex: 1 }}>
            <Header />
            <AppRouter />
            <Select
              mode="multiple"
              style={{ width: '100%' }}
              placeholder="select one country"
              value={this.state.selectedValue}
              onChange={this.handleChange}
              optionLabelProp="label"
            >
              <Option value="china" label="China">
                <div className="demo-option-label-item">
        <span role="img" aria-label="China">
          🇨🇳
        </span>
                  China (中国)
                </div>
              </Option>
              <Option value="usa" label="USA">
                <div className="demo-option-label-item">
        <span role="img" aria-label="USA">
          🇺🇸
        </span>
                  USA (美国)
                </div>
              </Option>
              <Option value="japan" label="Japan">
                <div className="demo-option-label-item">
        <span role="img" aria-label="Japan">
          🇯🇵
        </span>
                  Japan (日本)
                </div>
              </Option>
              <Option value="korea" label="Korea">
                <div className="demo-option-label-item">
        <span role="img" aria-label="Korea">
          🇰🇷
        </span>
                  Korea (韩国)
                </div>
              </Option>
            </Select>
            <AstcnCmp/>
          </div>
        </div>
      </Auth>
    );
  }
}
export default withRouter(Home);
