import React, { Fragment, FC } from "react";
import { Menu, Button } from "antd";
import { PieChartOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";

const { SubMenu } = Menu;

class SideBar extends React.Component<any, any> {
  state = {
    collapsed: false,
    userRole: "",
  };

  componentDidMount() {
    this.renderSideBar();
  }

  renderSideBar() {}

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleClick = (data: any) => {
    this.props.history.push(data.path);
  };

  render() {
    const { sideBars, role } = this.props;
    return (
      <Fragment>
        <div style={{ background: "#001529", textAlign: "center" }}>
          <img src={require("../../../assests/images/tea.png")} />
        </div>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          style={{ height: "100%", border: "none" }}
          inlineCollapsed={this.state.collapsed}
        >
          {sideBars.map((cur: any) => {
            return !!cur.children && !!cur.children.length ? (
              cur.roles.indexOf(role) > -1 ? (
                <SubMenu
                  key={`index-${cur.name}`}
                  icon={<PieChartOutlined />}
                  title={cur.name}
                >
                  {/*<SideBar sideBars={cur.children} role={role} history={this.props.history}/>*/}
                  {cur.children.map((item: any) => {
                    return (
                      <Menu.Item
                        key={`index-${item.name}`}
                        icon={<PieChartOutlined />}
                        onClick={() => {
                          this.handleClick(item);
                        }}
                      >
                        {item.name}
                      </Menu.Item>
                    );
                  })}
                </SubMenu>
              ) : null
            ) : cur.roles.indexOf(role) > -1 ? (
              <Menu.Item
                key={`index-${cur.name}`}
                icon={<PieChartOutlined />}
                onClick={() => {
                  this.handleClick(cur);
                }}
              >
                {cur.name}
              </Menu.Item>
            ) : null;
          })}
        </Menu>
      </Fragment>
    );
  }
}

export default withRouter(SideBar);
