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
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    const widgets = [
      <SimpleLineChart />,
      SimpleBarChart,
      BubbleChart,
      SimpleAreaChart,
      SimplePieChart,
      SimpleRadarChart,
      SimpleScatterChart
    ];

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
          height="40rem"
          width="40rem"
          bodyStyle={{ overflowY: "scroll" }}
        >
          <WidgetModalGrid onSelectWidget={this.props.onSelectWidget} />
        </Modal>
      </div>
    );
  }
}

export default WidgetModal;
