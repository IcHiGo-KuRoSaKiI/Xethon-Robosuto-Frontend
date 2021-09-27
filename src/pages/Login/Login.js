import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import ReactDOM from 'react-dom';
import './Login.css'
import Login_Img from './login_img.jpeg'
import { Link, Redirect } from "react-router-dom";
import Select from 'react-select';

const actions = [
  { label: "Admin", value: 1 },
  { label: "Student", value: 2 },
  { label: "Teacher", value: 3 }
];

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [type, setType] = useState("student")
  let history = useHistory();

  const LoginHandler = () => {
    console.log("login clicked", isLoggedIn, type)
    sessionStorage.setItem('isLoggedIn', JSON.stringify(type));
    history.push("/dashboard");
  }

  return (
    <div id="master_body">
      <div id="inner_login_div">
        <table id="login_outer">
          <tr>
            <img src={Login_Img} id="login_img"></img>
          </tr>
          <tr>
            <td><Select options={actions} id="drop_down_login" /></td>
          </tr>
          <tr>
            <td>{<input class="login_inputs"
              placeholder="USERNAME"
            ></input>}</td>
          </tr>
          <tr>
            <td>
              {<input class="login_inputs"
                placeholder="PASSWORD"
                type="password"
              ></input>}
            </td>
          </tr>
          <tr>
            <button id="login_submit_btn" onClick={LoginHandler}>LOGIN</button>
          </tr>
          <tr>
            <Link to="/Register"> New User ? Register </Link>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Login