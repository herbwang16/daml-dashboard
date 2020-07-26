import React from "react";
import GridDisplay from "./GridDisplay";
import { withRouter } from 'react-router-dom';
import { Context } from "../context/Context";
import { GetDashboards } from '../../api/api';
import SideBar from './SideBar';

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
    if(prevProps.match.params.id !== this.props.match.params.id) {
      const { context, dispatch } = this.context;
      const id = this.props.match.params.id;
      const title = context.dashboards.find(dash => dash._id === id).name
      dispatch({type: 'CHANGE SIDEBAR', payload: {key: id, title: title}});
    }
  }

  render() {
    const { context, dispatch } = this.context;
    switch(!context.key) {
      case(false):
        return (
          <div>
            <div className="page-title">
              <center>{context.title}</center>
            </div>

            <div>
              <GridDisplay/>
            </div>
          </div>
        );
      default:
        return (
          <div style = {{lineHeight: 1.2,  position: 'absolute', fontSize: 100, left: 525, top: 300}}>
            Welcome, create or choose a dashboard
          </div>
        )
    }
  }
}

export default withRouter(Homepage);
