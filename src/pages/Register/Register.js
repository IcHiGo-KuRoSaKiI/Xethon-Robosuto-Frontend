import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Register.css'
import signup from './signup.jpeg'
import Select from 'react-select';
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom"
import { useStateValue } from "../../StateProvider"
import { useHistory } from "react-router-dom"
import endPoints from "../../utils/EndPointApi"
const actions = [
  { label: "Teacher", value: 1 },
  { label: "Student", value: 2 }

];



function Register() {
  const [reducerState, dispatch] = useStateValue()
  const [selectedType, setSelectedType] = useState("");
  const [username, setUsername] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [type, setType] = useState("student")
  const [authenticate, setAuthenticated] = useState(false)
  let history = useHistory();

  // Text Based Events
  const emailChangeHandler = (event) => {
    console.log(event.target.value)
    setEnteredEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    console.log(event.target.value)
    setEnteredPassword(event.target.value);
  };
  const userTypeHandler = (event) => {
    setSelectedType(event.label);
    console.log(event.label)
  };
  const userNameHandler = (event) => {
    setUsername(event.target.value);
    console.log(event.target.value)
  };


  const signUpHandler = (event) => {
    history.push("/")
    event.preventDefault();
    const credentials = {
      userType: selectedType,
      username: username,
      password: enteredPassword,
      email: enteredEmail
    };
    console.log(credentials)
    console.log(credentials)
    const uri = endPoints.loginURL
    console.log("uri: ", uri)
    postData(uri, credentials)
      .then(data => {
        console.log(data, "THis is a test result ");
        if (data) {
          console.log("USER CREATED SUCCESSFULLy")
          // sessionStorage.setItem('isLoggedIn', JSON.stringify(type));
          // history.push("/dashboard")
        } else {
          console.log("Failed")
        }
        // dispatch({
        //   type: 'USER_LOGIN',
        //   type: data.token,
        //   userRole: data.role
        // }) // JSON data parsed by data.json() call
      });
    setEnteredEmail("");
    setEnteredPassword("");
  }

  async function postData(url, data) {
    console.log(data)
    const response = await fetch(url, {
      // mode: 'no-cors',
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {

        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }

  async function showData(url) {
    // setIsLoading(true)
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const Data = await response.json();
    // setIsLoading(false)
    return Data
  }

  return (
    <div id="master_body">
      <div id="inner_signup_div">
        <table id="signup_outer">
          <tr>
            <img src={signup} id="signup_img"></img>
          </tr>
          <tr>
            <td><Select options={actions} id="drop_down_signup" onChange={userTypeHandler} /></td>
          </tr>
          <tr>
            <td>{<input class="signup_inputs"
                    placeholder="USERNAME" 
                    type="text"
                    onChange={userNameHandler}
                    required
                    ></input>}</td>
          </tr>

          <tr>
            <td>{<input class="signup_inputs"
                    placeholder="EMAIL-ID" 
                    type="email"
                    onChange={emailChangeHandler}
                    required
                    ></input>}</td>
          </tr>

          <tr>
            <td>{<input class="signup_inputs" 
                      placeholder="PASSWORD" 
                      type="password" 
                      onChange={passwordChangeHandler}
                      required
                      ></input>}</td>
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