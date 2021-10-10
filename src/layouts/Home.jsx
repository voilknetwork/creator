import React, { Component } from 'react';
import Topbar from "../components/Topbar";
import Siteheader from "../components/Siteheader";
import Sitefooter from '../components/Sitefooter';
import { Route, Switch, Redirect } from "react-router-dom";
import dashboardRoutes from "../routes/dashboard";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Siteheader />
        <Switch>
            {dashboardRoutes.map((prop, key) => {
              if (prop.collapse) {
                return prop.views.map((prop2, key2) => {
                  return (
                    <Route
                      path={prop2.path}
                      component={prop2.component}
                      key={key2}
                    />
                  );
                });
              }
              if (prop.redirect)
                return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
              if (prop.dynamic)
                return (
                  <Route
                    path={prop.path}
                    component={prop.component}
                    key={key}
                  />
                );
              return (
                <Route path={prop.path} component={prop.component} key={key} />
              );
            })}
          </Switch>
        <Sitefooter />
      </React.Fragment>
    );
  }
}

export default Home;

