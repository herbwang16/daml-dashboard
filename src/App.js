import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Homepage from "./components/layout/Homepage";
import WidgetDataEntry from "./components/widgetSelection/WidgetDataEntry";
import SideBar from "./components/layout/SideBar";
import NavBar from "./components/layout/NavBar";
// Import context
import { ThemeProvider } from "./components/context/ThemeContext";

import "semantic-ui-css/semantic.min.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Route path = '/(|home|)' exact component = {() => <NavBar title = 'Peagle' user = 'DAML'/>}/>
        <Route path = '/(|home|)' exact component = {SideBar}/>
        <Route path = '/'>
          <Redirect to = '/home'></Redirect>
        </Route>
        <Switch>
          {/* <Route path = '/login' exact component = {Login}/> */}
          <Route path = '/home' exact component = {Homepage}/>
        </Switch>
      </Router>
  </ThemeProvider>
  );
}

export default App;
