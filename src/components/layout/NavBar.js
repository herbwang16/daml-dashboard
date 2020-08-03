import React from "react";
import "../../App.css";
import {Layout, Button} from "antd";
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import {Logout as logout} from "../../api/api";
const { Header } = Layout;
const logo = require("../../images/logoPeagle.svg");

class NavBar extends React.Component{
   
  handleClick = async () => {
    await logout(localStorage.getItem('token'))
      .catch(err => {
        console.log(err)
      });
    localStorage.clear();
    this.props.history.push('/login');
  }
   
   render(){
     return (
    <Layout>
    <Header className="header">
      <img
              src={logo}
              alt="Logo"
              style={{maxWidth:"4rem", position: "absolute", top: 11}}
            />
      <div className="title">
       Peagle</div>
      <div className="user">
          <span>Welcome, DAML <UserOutlined/></span> 
      </div>
    <div className="logout-button"><Button onClick={this.handleClick} style={{height:"40px"}}>
      <span><LogoutOutlined/>   Logout</span>
    </Button></div>
    </Header>
    </Layout>
   );
   }
   
};

export default withRouter(NavBar);
