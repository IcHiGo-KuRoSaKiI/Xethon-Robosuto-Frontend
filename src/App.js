import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Login.js";
import Register from './pages/Register/Register';
import PrivateRoute from './PrivateRoute';
import StudentHome from "./pages/Student/StudentHome";
import RaiseQuery from "./pages/Admin/ViewIssues";
import { useStateValue } from "./StateProvider"
import EmployeeHome from './pages/Employee/EmployeeHome'


function App() {
  // const loginStatus = JSON.parse(sessionStorage.getItem("isLoggedIn"));
  const [reducerState, dispatch] = useStateValue()
  const type2 = reducerState.type;
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* TODO:Have to do private routing */}
          <Route exact path="/dashboard" isLoggedIn={type2} />
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/StudentHome">
            <StudentHome />
          </Route>
          <Route path="/AdminHome">
            <RaiseQuery />
          </Route>
          <Route path="/EmployeeHome">
            <EmployeeHome />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;
