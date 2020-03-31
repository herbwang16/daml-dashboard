import React from "react";
import GridLayout from "react-grid-layout";

class GridDisplay extends React.Component {
  state = {
    layout: [
      { i: "a", x: 0, y: 0, w: 1, h: 2 },
      { i: "b", x: 1, y: 0, w: 3, h: 2 },
      { i: "c", x: 4, y: 0, w: 1, h: 2 },
      { i: "d", x: 0, y: 0, w: 1, h: 2 },
      { i: "e", x: 1, y: 0, w: 3, h: 2 },
      { i: "f", x: 4, y: 0, w: 1, h: 2 },
      { i: "g", x: 0, y: 0, w: 1, h: 2 },
      { i: "h", x: 1, y: 0, w: 3, h: 2 },
      { i: "i", x: 4, y: 0, w: 1, h: 2 }
    ]
  };

  componentDidMount;
  render() {
    // layout is an array of objects, see the demo for more complete usage

    return (
      <GridLayout
        layout={this.state.layout}
        cols={12}
        rowHeight={30}
        width={1200}
        style={{ paddingTop: "2rem" }}
      >
        <div className="grid-item" key="a">
          a
        </div>
        <div className="grid-item" key="b">
          b
        </div>
        <div className="grid-item" key="c">
          c
        </div>
        <div className="grid-item" key="d">
          d
        </div>
        <div className="grid-item" key="e">
          e
        </div>
        <div className="grid-item" key="f">
          f
        </div>

        <div className="grid-item" key="g">
          g
        </div>
        <div className="grid-item" key="h">
          h
        </div>
        <div className="grid-item" key="i">
          i
        </div>
      </GridLayout>
    );
  }
}

export default GridDisplay;
