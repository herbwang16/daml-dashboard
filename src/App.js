import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import Homepage from "./components/layout/Homepage";
import WidgetDataEntry from "./components/widgetSelection/WidgetDataEntry";
// Import context
import { ThemeProvider } from "./components/context/ThemeContext";

import "semantic-ui-css/semantic.min.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/table">Table</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Homepage />
          </Route>
          <Route path="/table">
            <Table />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Table() {
  return <h2>Table</h2>;
}
