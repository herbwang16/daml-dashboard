import React from "react";
import "../../App.css";
import {Layout, Button} from "antd";
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import {Logout as logout} from "../../api/api";
const { Header } = Layout;

class NavBar extends React.Component{
   
   
   render(){
     return (
    <Layout>
    <Header className="header">
      <div className="title">{this.props.title}</div>
      <div className="user"><span>Welcome, {this.props.user} <UserOutlined/></span></div>
    <div className="logout-button"><Button onClick={console.log("click")} style={{height:"40px"}}>
      <span><LogoutOutlined/>   Logout</span>
    </Button></div>
    </Header>
    </Layout>
   );
   }
   
};

export default NavBar;
