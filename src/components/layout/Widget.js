import React from "react";
import { ResponsiveContainer } from "recharts";
import SimpleLineChart from "../widgets/SimpleLineChart";

class Widget extends React.Component {
  render() {
    const removeStyle = {
      position: "absolute",
      right: "2px",
      top: 0,
      cursor: "pointer"
    };

    const i = this.props.i;

    return (
      <div
        className="react-grid-item"
        key={i}
        data-grid={this.props.grid}
        style={{ padding: "1rem" }}
      >
        <ResponsiveContainer width="100%" height="100%">
          {this.props.chart ? this.props.chart : <SimpleLineChart />}
        </ResponsiveContainer>
        <div
          className="remove"
          style={removeStyle}
          onClick={() => this.props.onRemoveItem(i)}
        >
          x
        </div>
      </div>
    );
  }
}

export default Widget;
