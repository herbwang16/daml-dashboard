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
import LoginPage from './components/auth/LoginPage';
import FPPage from './components/auth/FPPage';
import SignUpPage from './components/auth/SignUpPage';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Route path = {['/home']} component = {() => <NavBar title = 'Peagle' user = 'DAML'/>}/>
        <Route path = {['/home']} component = {SideBar}/>
        <Switch>
          <Route path = '/login' component = {LoginPage}/>
          <Route path = '/signup' component = {SignUpPage}/>
          <Route path = '/reset-password' component = {FPPage}/>
          <ProtectedRoute path = '/home' component = {Homepage}/>
        </Switch>
      </Router>
  </ThemeProvider>
  );
}

export default App;
