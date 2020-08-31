import React from "react";
import "../../App.css";
import {Layout, Button, Card} from "antd";
import { UserOutlined, LogoutOutlined, SettingOutlined, MenuOutlined } from '@ant-design/icons';
import {Logout as logout} from "../../api/api";
import { Context } from "../context/Context";
const { Footer: Ftr } = Layout;
const logo = require("../../images/logoPeagle.svg");

class Footer extends React.Component{
  static contextType = Context;

  state = {
  }

   
   render() {
    const { context, dispatch } = this.context;
     return (
       <div style = {{position: 'relative', height: '12vh', width: '100%'}}>
        <Ftr className = 'footer'>
          <div style = {{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <a href = "https://www.dukeaml.com/" target="_blank" style = {{color: 'black'}}>Duke Applied Machine Learning ©</a>
          </div>
        </Ftr>
      </div>
   );
   }
   
};

export default Footer;