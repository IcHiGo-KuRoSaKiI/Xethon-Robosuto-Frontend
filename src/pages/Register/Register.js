import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Register.css'
import signup from './signup.jpeg'
import Select from 'react-select';
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom"
import { useHistory } from "react-router-dom"

const actions = [
  { label: "Teacher", value: 1 },
  { label: "Student", value: 2 }

];

function Register() {
  let history = useHistory();

  const signUpHandler = () => {
    history.push("/")
  }

  return (
    <div id="master_body">
      <div id="inner_signup_div">
        <table id="signup_outer">
          <tr>
            <img src={signup} id="signup_img"></img>
          </tr>
          <tr>
            <td><Select options={actions} id="drop_down_signup" /></td>
          </tr>
          <tr>
            <td>{<input class="signup_inputs" placeholder="USERNAME"></input>}</td>
          </tr>

          <tr>
            <td>{<input class="signup_inputs" placeholder="EMAIL-ID" ></input>}</td>
          </tr>

          <tr>
            <td>{<input class="signup_inputs" placeholder="PASSWORD" type="password" ></input>}</td>
          </tr>

          <tr>
            <button id="signup_submit_btn" onClick={signUpHandler}>SIGNUP</button>
          </tr>
          <tr>
            <Link to="/"> Already a User ? Login </Link>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default withRouter(Register)