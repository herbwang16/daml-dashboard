import React from "react";
import GridDisplay from "./GridDisplay";
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';
import { Context } from "../context/Context";
import { GetDashboards } from '../../api/api';
import SideBar from './SideBar';

const { Content } = Layout;

class AccountSettings extends React.Component {
  static contextType = Context;

  async componentDidMount() {
    
  }

  async componentDidUpdate(prevProps) {
    
  }

  render() {
    const { context, dispatch } = this.context;
    return (
        <Content className = 'content' style = {{marginTop: '10vh'}}>
            <div style = {{lineHeight: 1.2,  fontSize: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                Settings
            </div>
        </Content>
    )
  }
}

export default withRouter(AccountSettings);
