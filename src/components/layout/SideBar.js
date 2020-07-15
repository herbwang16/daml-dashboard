import React from "react";
import "../../App.css";

import { Layout, Menu} from 'antd';
import { UserOutlined, ProfileFilled, BlockOutlined, SettingFilled, FileAddFilled, SwitcherOutlined} from '@ant-design/icons';
import { GetDashboards } from '../../api/api';

const { SubMenu } = Menu;
const { Sider } = Layout;

const Option = props => <div>{props.opt}</div>

class NavBar extends React.Component {

  handleClick = e => {
    console.log('click ', e);
  };

  async componentDidMount() {
    const dashboards = await GetDashboards();
    console.log(dashboards);
  }

  render() {
    return (
      <Layout>
      <Sider width={317} className="site-layout-background">
      <div className="logo"><div className="daml"><span><UserOutlined />DAML</span></div></div>
        <Menu
          mode="inline"
          /* defaultSelectedKeys={['1']}
           defaultOpenKeys={['sub1']}*/
           style={{ height: '100%', borderRight: 0 }}
           className="menu-layout-background"
        >

          <SubMenu key="sub1"  className="main-menu" title={
            <span>
            <BlockOutlined/>
            <span>My Dashboards</span>
            </span>}>
            <Menu.Item key="1" className="menu-item"><Option opt="BSR v1"/></Menu.Item>
            <Menu.Item key="2" className="menu-item" ><Option opt="Phoenix Project" /></Menu.Item>
            <Menu.Item key="3" className="menu-item"><Option opt="DoD" /></Menu.Item>
            <Menu.Item key="4" className="menu-item"><FileAddFilled />Add Dashboard</Menu.Item>
          </SubMenu>


          <SubMenu key="sub2" className="main-menu" title={
              <span>
            <ProfileFilled/>
            <span>My Data</span>
            </span>
          }
          >
            <SubMenu key="g1" className="option" title={<Option opt="BSR v1" />}>
            <Menu.Item key="5" className="submenu-data">
              <Option opt={<span><SwitcherOutlined/>PeanutButter.csv</span>}/>
            </Menu.Item>
            <Menu.Item key="6" className="submenu-data"><Option opt={<span><SwitcherOutlined/>BSR API</span>}/></Menu.Item>
            <Menu.Item key="7" className="submenu-data"><Option opt={<span><SwitcherOutlined/>Sales.csv</span>}/></Menu.Item>
            </SubMenu>

            <SubMenu key="g2" className="option" title={<Option opt="Phoenix Project" />}>
            <Menu.Item key="8" className="submenu-data" ><Option opt={<span><SwitcherOutlined/>Companies.csv</span>}/></Menu.Item>
            <Menu.Item key="9" className="submenu-data"><Option opt={<span><SwitcherOutlined/>Participants.csv</span>}/></Menu.Item>
            <Menu.Item key="10" className="submenu-data"><Option opt={<span><SwitcherOutlined/>PeanutButter.csv</span>}/></Menu.Item>
            </SubMenu>

            <SubMenu key="g3" className="option" title={<Option opt="DoD" />}>
            <Menu.Item key="11" className="submenu-data" ><Option opt={<span><SwitcherOutlined/>Jelly.csv</span>}/></Menu.Item>
            <Menu.Item key="12" className="submenu-data"><Option opt={<span><SwitcherOutlined/>BeeMovieScript.txt</span>}/></Menu.Item>
            <Menu.Item key="13" className="submenu-data"><Option opt={<span><SwitcherOutlined/>image.png</span>}/></Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub3" className="main-menu" title={
              <span>
            <SettingFilled/>

            
            <span>Account Settings</span>
            </span>
          }>
            <Menu.Item key="14" className="submenu-data">Payment</Menu.Item>
            <Menu.Item key="15" className="submenu-data">Profile</Menu.Item>
            <Menu.Item key="16" className="submenu-data">History</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      </Layout>
    );
  }
}

export default NavBar;
