import React from 'react';
import { Route, Redirect } from "react-router-dom";
import StudentHome from "./pages/Student/StudentHome";
import RaiseQuery from "./pages/Admin/ViewIssues";


function PrivateRoute({ isLoggedIn: isLoggedIn, ...rest }) {
  console.log("in private route", isLoggedIn)
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoggedIn == "student") {
          return <StudentHome />;
        } else if (isLoggedIn == "admin") {
          return <RaiseQuery />;
        }
        else {
          alert("private failed")
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }} />
  );
}

export default PrivateRoute;