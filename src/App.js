import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Login.js";
import Register from './pages/Register/Register';
import StudentHome from "./pages/Student/StudentHome";
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute path="/dashboard" component={ } />
          {/* <StudentHome />
          </Route> */}
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;
