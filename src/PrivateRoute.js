import React from 'react';
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ isLoggedIn: isLoggedIn, component: Component, type: Type, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoggedIn) {
          return <Component />
          // if (Type === "admin") {
          //   return (
          //     // <Redirect to={{ pathname= "/adminHome", state: { from: prop.location } }} />
          //   )
          // }
          // else if (Type === "student") {
          //   return (
          //     <Redirect to={{ pathname= "/studentHome", state: { from: prop.location } }} />
          //   )
          // }
          // else {
          //   return (
          //     <Redirect to={{ pathname= "/solverHome", state: { from: prop.location } }} />
          //   )
          // }
        }
        else {
          return (
            <Redirect to={{ pathname= "/", state: { from: prop.location } }} />
          );
        }
      }} />
  );
}

export default PrivateRoute;