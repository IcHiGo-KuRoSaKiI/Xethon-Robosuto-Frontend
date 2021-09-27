import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Login.js";
import Register from './pages/Register/Register';
import StudentHome from "./pages/Student/StudentHome"

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Switch>
            <Route path="/studentHome">
              <StudentHome />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
