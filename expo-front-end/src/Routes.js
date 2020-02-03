import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home.js";
import AR from "./containers/AR.js";
import Map from "./containers/Map.js";
import Projects from "./containers/Projects.js";
import Upload from "./containers/Upload.js";

const Routes = ({ childProps }) => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/AR" exact component={AR} />
      <Route path="/Map" exact component={Map} />
      <Route path="/Projects" exact component={Projects} />
      <Route path="/Upload" exact component={Upload} />
    </Switch>
  );
};

export default Routes;
