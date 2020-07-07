import React from "react";
import Button from "antd/es/button";
import { Layout, Avatar, Space } from "antd";
import Title from "antd/lib/typography/Title";

import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LoginOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const { Header, Footer, Sider, Content } = Layout;

class Landingpage extends React.Component {
  state = {
    current: "dashboard",
  };
  render() {
    const { current } = this.state;
    return (
      <div>
        <Layout>
          <Header
            style={{ width: "100%", position: "fixed", background: "#798DE4" }}
          >
            <Menu
              onClick={this.handleClick}
              selectedKeys={[current]}
              mode="horizontal"
              style={{ background: "#798DE4" }}
              theme="dark"
            >
              <Menu.Item key="dashboard" icon={<AppstoreOutlined />}>
                Dashboard
              </Menu.Item>
              <Menu.Item key="contact" icon={<MailOutlined />}>
                Contact Us
              </Menu.Item>

              <Menu.Item icon={<SettingOutlined />} key="daml">
                <a
                  href="https://dukeaml.com"
                  target="_ blank"
                  rel="noopener noreferrer"
                >
                  DAML
                </a>
              </Menu.Item>
              <Menu.Item style={{ float: "right" }}>
                <Button type="default" icon={<LoginOutlined />}>
                  Login
                </Button>
              </Menu.Item>
            </Menu>
          </Header>

          <Layout>
            <Content>
              <Title style={{ color: "white" }} level={2}>
                Peagle
              </Title>

              <Space align="center" style={{ padding: 50 }}>
                <Avatar
                  style={{ color: "white" }}
                  shape="square"
                  size={128}
                  src="laptop.png"
                />
                <span className="block">
                  Lorem ipsum dolor sit amet, vis meis evertitur argumentum ei.
                  Ex fabellas sadipscing his.
                </span>
              </Space>

              <Space align="center" style={{ padding: 50 }}>
                <span className="block">
                  Lorem ipsum dolor sit amet, vis meis evertitur argumentum ei.
                  Ex fabellas sadipscing his.
                </span>
                <Avatar
                  style={{ color: "white" }}
                  shape="square"
                  size={128}
                  src="report.png"
                />
              </Space>
              <Space align="center" style={{ padding: 50 }}>
                <Avatar
                  style={{ color: "white" }}
                  shape="square"
                  size={128}
                  src="target.png"
                />
                <span className="block">
                  Lorem ipsum dolor sit amet, vis meis evertitur argumentum ei.
                  Ex fabellas sadipscing his.
                </span>
              </Space>
            </Content>
          </Layout>
          <Footer style={{ background: "#4C5B69" }}>footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default Landingpage;
