import React from "react";
import ReactDOM from "react-dom";

//ReactDOM.render(<App />, document.getElementById("root"));
import { render } from "react-dom";
import { CsvToHtmlTable } from "react-csv-to-table";
import ReactFileReader from "react-file-reader";

const sampleData = `
Chrysler Imperial,14.7,8,440,230,3.23,5.345,17.42,0,0,3,4
Fiat 128,32.4,4,78.7,66,4.08,2.2,19.47,1,1,4,1
`;

class App extends React.Component {
  state = {
    csvData: null,
  };

  render() {
    return (
      <div>
        <ReactFileReader
          multipleFiles={false}
          fileTypes={[".csv"]}
          handleFiles={this.handleFiles}
        >
          <button className="btn">Upload</button>
        </ReactFileReader>
        <CsvToHtmlTable
          data={this.state.csvData || sampleData}
          csvDelimiter=","
          tableClassName="table table-striped table-hover"
        />
      </div>
    );
  }
  handleFiles = (files) => {
    var reader = new FileReader();
    reader.onload = (e) => {
      // Use reader.result
      this.setState({
        csvData: reader.result,
      });
    };
    reader.readAsText(files[0]);
  };
}

//render(<App />, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById("root"));
