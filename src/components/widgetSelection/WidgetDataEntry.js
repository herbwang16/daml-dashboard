import React from "react";
import { Dropdown, Row, Col, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import { ThemeContext } from "../context/ThemeContext";

// import widgets
import WidgetModal from "../widgetSelection/WidgetModal";
import SimpleLineChart from "../widgets/SimpleLineChart";
import SimpleBarChart from "../widgets/SimpleBarChart";
import BubbleChart from "../widgets/BubbleChart";
import SimpleAreaChart from "../widgets/SimpleAreaChart";
import SimplePieChart from "../widgets/SimplePieChart";
import SimpleRadarChart from "../widgets/SimpleRadarChart";
import SimpleScatterChart from "../widgets/SimpleScatterChart";

const widgets = [
  {
    key: "SimpleLineChart",
    text: "Simple line chart",
    value: "Simple line chart",
    widget: <SimpleLineChart />
  },
  {
    key: "SimpleBarChart",
    value: "Simple bar chart",
    text: "Simple bar chart",
    widget: <SimpleBarChart />
  },
  {
    key: "BubbleChart",
    text: "Bubble chart",
    value: "Bubble chart",
    widget: <BubbleChart />
  },
  {
    key: "SimpleAreaChart",
    text: "Simple area chart",
    value: "Simple area chart",
    widget: <SimpleAreaChart />
  },
  {
    key: "SimplePieChart",
    text: "Simple pie chart",
    value: "Simple pie chart",
    widget: <SimplePieChart />
  },
  {
    key: "SimpleRadarChart",
    text: "Simple radar chart",
    value: "Simple radar chart",
    widget: <SimpleRadarChart />
  },
  {
    key: "SimpleScatterChart",
    text: "Simple scatter chart",
    value: "Simple scatter chart",
    widget: <SimpleScatterChart />
  }
];

class WidgetDataEntry extends React.PureComponent {
  state = { selected: "" };

  static contextType = ThemeContext;

  render() {
    const { theme, dispatch } = this.context;
    const selectedWidget = widgets.filter(
      w => w.value === this.props.widget
    )[0];
    const widgetRender =
      selectedWidget != null ? selectedWidget.widget : <div />;
    const { selectedWidgetBackgroundColor, widgetBackgroundColor } = theme;

    return (
      <div>
        {/*
        can also use this.props.widget as title text; decide later what
        makes more sense
        */}
        <center className="widget-header"> {selectedWidget.value} </center>
        <Row>
          <Col style={{ height: "15rem" }} span={24}>
            {widgetRender}
          </Col>
          <Col span={24}>
            <div className="widget-header"> Upload your CSV here.</div>
            <Upload {...this.props}>
              <Button>
                <UploadOutlined /> Upload Data
              </Button>
            </Upload>
          </Col>
        </Row>
      </div>
    );
  }
}

export default WidgetDataEntry;
