import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Login.js";
import Register from './pages/Register/Register';
import PrivateRoute from './PrivateRoute';
import StudentHome from "./pages/Student/StudentHome";
import RaiseQuery from "./pages/Admin/ViewIssues";

function App() {
  const loginStatus = JSON.parse(sessionStorage.getItem("isLoggedIn"));
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute path="/dashboard" isLoggedIn={loginStatus} />
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;
