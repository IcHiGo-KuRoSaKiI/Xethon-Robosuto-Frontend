import React from 'react';
import { Route, Redirect } from "react-router-dom";
import StudentHome from "./pages/Student/StudentHome";
import RaiseQuery from "./pages/Admin/ViewIssues";
import { useStateValue } from "./StateProvider"


function PrivateRoute({ isLoggedIn: isLoggedIn, ...rest }) {
  const [reducerState, dispatch] = useStateValue()
  console.log("in private route", isLoggedIn, reducerState)
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoggedIn == "student") {
          return <StudentHome />;
        } else if (isLoggedIn == "Admin") {
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