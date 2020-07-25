import React from "react";
import "./App.css";
import Homepage from "./components/layout/Homepage";
import WidgetDataEntry from "./components/widgetSelection/WidgetDataEntry";
import SideBar from "./components/layout/SideBar";
import NavBar from "./components/layout/NavBar";
// Import context
import { ThemeProvider } from "./components/context/ThemeContext";
import { ContextProvider } from "./components/context/Context";

import "semantic-ui-css/semantic.min.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import LoginPage from "./components/auth/LoginPage";
import FPPage from "./components/auth/FPPage";
import SignUpPage from "./components/auth/SignUpPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  return (
    <Router>
      <ContextProvider>
        <Route
          path='/(|home|)'
          component={() => <NavBar title="Peagle" user="DAML" />}
        />
        <Route path='/(|home|)' component={SideBar} />
        <Switch>
          <Redirect exact path = '/' to = '/home'/>
          <ProtectedRoute exact path="/home" component={Homepage} />
          <Route exact path="/home/:id" component={Homepage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/reset-password" component={FPPage} />
        </Switch>
      </ContextProvider>
    </Router>
  );
}

export default App;
