import React from "react";
import { Modal, Button } from "antd";

import WidgetModalGrid from "./WidgetModalGrid";
import GridDisplay from "../layout/GridDisplay";
import SimpleLineChart from "../widgets/SimpleLineChart";
import SimpleBarChart from "../widgets/SimpleBarChart";
import BubbleChart from "../widgets/BubbleChart";
import SimpleAreaChart from "../widgets/SimpleAreaChart";
import SimplePieChart from "../widgets/SimplePieChart";
import SimpleRadarChart from "../widgets/SimpleRadarChart";
import SimpleScatterChart from "../widgets/SimpleScatterChart";

class WidgetModal extends React.Component {
  state = { visible: false, widget: "" };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(this.state);
    this.props.onAddWidget(this.state.widget);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  handleSelectWidget = type => {
    this.setState({ widget: type });
    console.log(type);
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Add Widget
        </Button>
        <Modal
          title="Select Widget"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          bodyStyle={{
            overflowY: "scroll",
            height: "40rem",
            padding: "2rem 3rem"
          }}
        >
          <WidgetModalGrid
            onSelectWidget={type => this.handleSelectWidget(type)}
          />
        </Modal>
      </div>
    );
  }
}

export default WidgetModal;
