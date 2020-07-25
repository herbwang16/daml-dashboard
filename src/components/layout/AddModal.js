import React from "react";
import { Modal, Menu, Input, Button } from "antd";
import { CreateDashboard, GetDashboards } from '../../api/api';
import { withRouter } from 'react-router-dom';
import { UserOutlined, ProfileFilled, BlockOutlined, SettingFilled, FileAddFilled, SwitcherOutlined} from '@ant-design/icons';
import { Context } from "../context/Context";

class AddModal extends React.Component {
  state = { visible: false, title: ''};
  static contextType = Context;

  showModal = () => {
    console.log('show')
    this.setState({visible: true})
  }

  handleCancel = () => {
      this.setState({visible: false});
      console.log(this.state.visible, 'hello')
  }

  handleOk = async () => {
      const { sidebar, dispatch } = this.context;
      const dashboard = await CreateDashboard(localStorage.getItem('token'), this.state.title);
      const dashboards = await GetDashboards(localStorage.getItem('token'))
        .catch(err => {console.log(err); return []});
      dispatch({type: 'CHANGE SIDEBAR', payload: {dashboards: dashboards}});
      this.props.history.push(`home/${dashboard._id}`);
      this.setState({visible: false});
  }

  render() {
    return (
      <span>
        <Menu.Item key="4" className="menu-item" {...this.props} onClick = {this.showModal}>
          <FileAddFilled/>
        </Menu.Item>
        <Modal
          title={"Add Dashboard"}
          visible = {this.state.visible}
          onOk={this.handleOk}
          onCancel = {this.handleCancel}
          okText="Ok"
          width="50rem"

          className="modal-style"
          bodyStyle={{
            overflowY: "scroll",
            padding: "2rem 3rem"
          }}
        >
            <Input placeholder = 'Enter title'
                onChange = {e => {this.setState({title: e.target.value})}}
                value = {this.state.title}>
            </Input>
        </Modal>
      </span>
    );
  }
}

export default withRouter(AddModal);
