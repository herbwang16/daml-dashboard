import React from "react";
import GridDisplay from "./GridDisplay";
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';
import { Context } from "../context/Context";
import { GetDashboards } from '../../api/api';
import SideBar from './SideBar';

const { Content } = Layout;

class Homepage extends React.Component {
  static contextType = Context;

  async componentDidMount() {
    const { context, dispatch } = this.context;
    const id = this.props.match.params.id;
    const dashboards = await GetDashboards(localStorage.getItem('token'))
      .catch(err => {console.log(err); return []});
    const dashboard = dashboards.find(dash => dash._id === id);
    if(dashboard === undefined) {
      dispatch({type: 'CHANGE SIDEBAR', payload: {dashboards: dashboards}});
      this.props.history.push('/home');
    }
    else {
      let title = dashboard.name;
      dispatch({type: 'CHANGE SIDEBAR', payload: {key: id, title: title, dashboards: dashboards}});
    }
  }

  async componentDidUpdate(prevProps) {
    const { context, dispatch } = this.context;
    const id = this.props.match.params.id;
    if(prevProps.match.params.id !== id) {
      if(!id) {
        dispatch({type: 'CHANGE SIDEBAR', payload: {key: id}});
      }
      else {
        const title = context.dashboards.find(dash => dash._id === id).name
        dispatch({type: 'CHANGE SIDEBAR', payload: {key: id, title: title}});
      }
    }
  }

  render() {
    const { context, dispatch } = this.context;
    switch(!context.key) {
      case(false):
        return (
          <Content className = 'content'>
            <div style = {{display: 'flex', justifyContent: 'center', width: '90%'}}>
              <GridDisplay/>
            </div>
          </Content>
        );
      default:
        return (
          <Content className = 'content'>
            <div style = {{lineHeight: 1.2,  fontSize: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              Welcome, create or choose a dashboard
            </div>
          </Content>
        )
    }
  }
}

export default withRouter(Homepage);
