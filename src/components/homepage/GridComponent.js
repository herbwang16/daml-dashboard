import React from "react";

class GridComponent extends React.Component {
  render() {
    return (
      <div className="grid-item" key={this.props.key}>
        {this.props.content}
      </div>
    );
  }
}

export default GridComponent;
