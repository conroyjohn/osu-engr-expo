import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute.js";
import AuthenticatedRoute from "./components/AuthenticatedRoute.js";
import Home from "./containers/Home.js";
import AR from "./containers/AR.js";
import Map from "./containers/Map.js";
import Projects from "./containers/Projects.js";
import Upload from "./containers/Upload.js";
import Login from "./containers/Login.js";
import HelloWorld from "./containers/HelloWorld.js";
import ChangePassword from "./containers/ChangePassword.js";

const Routes = ({ appProps }) => {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Home} appProps={appProps} />
      <AppliedRoute path="/LogIn" exact component={Login} appProps={appProps} />
      <AppliedRoute path="/AR" exact component={AR} appProps={appProps} />
      <AppliedRoute
        path="/Projects"
        exact
        component={Projects}
        appProps={appProps}
      />
      <AppliedRoute path="/Map" exact component={Map} appProps={appProps} />
      <AppliedRoute
        path="/Upload"
        exact
        component={Upload}
        appProps={appProps}
      />
      <AppliedRoute
        path="/changePassword"
        exact
        component={ChangePassword}
        appProps={appProps}
      />
      <AppliedRoute
        path="/HelloWorld"
        exact
        component={HelloWorld}
        appProps={appProps}
      />
    </Switch>
  );
};

export default Routes;
