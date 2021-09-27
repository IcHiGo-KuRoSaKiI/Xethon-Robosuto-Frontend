import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Login.css'
import Login_Img from './login_img.jpeg'
import { Link } from "react-router-dom";
import Select from 'react-select';

const actions = [
  { label: "Admin", value: 1 },
  { label: "Student", value: 2 },
  { label: "Teacher", value: 3 }
];

class Login extends Component {
  render() {
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
              <button id="login_submit_btn">LOGIN</button>
            </tr>
            <tr>
              <Link to="/Register"> New User ? Register </Link>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default Login