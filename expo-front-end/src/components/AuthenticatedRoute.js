import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthenticatedRoute = ({ component: C, props: appProps, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        appProps.isAuthenticated ? (
          <C {...props} {...appProps} />
        ) : (
          <Redirect to="/SignIn" />
        )
      }
    />
  );
};

export default AuthenticatedRoute;
