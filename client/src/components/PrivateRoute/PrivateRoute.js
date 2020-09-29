import React from "react";
import { Route, Redirect } from "react-router-dom";

import { Auth } from "../Authentication/Authentication";
import {PermissionDenied} from "../PermissionDenied/PermissionDenied";

const hasPermissions = (permissions, requiredPermissions) => {
  return requiredPermissions.some(requiredPermission => {
    return permissions.some(permission => permission === requiredPermission);
  });
};

const PrivateRoute = ({ render: renderProp, component: Component, permissions: requiredPermissions = [], ...rest }) => {
  return (
  <Route
    {...rest}
    render={props => (
      <Auth>
        {({ isAuthenticated, permissions }) => {
          if (isAuthenticated) {
            if (hasPermissions(permissions, requiredPermissions)) {
              if (renderProp) return renderProp(rest);
              return <Component {...rest} />;
            }
            return <PermissionDenied />;
          }
          return (
            <Redirect
              to={{
                pathname: `/signin`,
                state: { from: props.location }
              }}
            />
          );
        }}
      </Auth>
    )}
  />
)};

export default PrivateRoute;