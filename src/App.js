import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Homepage from "./components/layout/Homepage";
import Landingpage from "./components/layout/Landingpage";
import WidgetDataEntry from "./components/widgetSelection/WidgetDataEntry";
// Import context
import { ThemeProvider } from "./components/context/ThemeContext";

import "semantic-ui-css/semantic.min.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

function App() {
  return (
    <ThemeProvider>
      <Landingpage />
    </ThemeProvider>
  );
}

export default App;
