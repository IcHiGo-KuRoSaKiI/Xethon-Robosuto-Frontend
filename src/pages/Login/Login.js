import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './Login.css'
import Login_Img from './login_img.jpeg'
import { Link, Redirect } from "react-router-dom";
import Select from 'react-select';
import { useStateValue } from "../../StateProvider"

const actions = [
  { label: "Admin", value: 1 },
  { label: "Student", value: 2 },
  { label: "Teacher", value: 3 }
];

function Login() {
  const [reducerState, dispatch] = useStateValue()
  const [isLoading, setIsLoading] = useState()
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [emailerrorMessage, setEmailerrorMessage] = useState(false);
  const [passworderrorMessage, setPassworderrorMessage] = useState(false);
  const [authenticate, setAuthenticated] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [type, setType] = useState("student")
  let history = useHistory();

  const LoginHandler = () => {
    console.log("login clicked", isLoggedIn, type)
    sessionStorage.setItem('isLoggedIn', JSON.stringify(type));
    history.push("/dashboard");
    // dispatch({
    //   type: 'USER_LOGIN',
    //   type: data.type,
    //   sid: data.sid
    // })
  }

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };




  const LoginHandler = (event) => {

    event.preventDefault();
    setIsLoading(true)
    const credentials = {
      userType: "Student",
      username: "Student",
      email: enteredEmail,
      password: enteredPassword,
    };

    console.log(credentials)
    postData(endPoints.loginURL, credentials)
      .then(data => {
        // setIsLoading(true)
        console.log(data);
        if (data.email == "Invalid") {
          setEmailerrorMessage(true);
          setIsLoading(false)
        }
        else if (data.password == "Invalid") {
          setPassworderrorMessage(true);
          setIsLoading(false)
        }
        if (data.token) {
          console.log("entered here")
          sessionStorage.setItem('token', JSON.stringify(data.token));
          // history.push("/mydashboard")
          // setAuthenticated(true)
          setAuthenticated(true)
          setIsLoading(false)
        }
        dispatch({
          type: 'USER_LOGIN',
          token: data.token,
          userRole: data.role
        }) // JSON data parsed by data.json() call


      });

    setEnteredEmail("");
    setEnteredPassword("");
  };













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


  if (authenticate == true) {
    console.log("login clicked", isLoggedIn, type)
    sessionStorage.setItem('isLoggedIn', JSON.stringify(type));
    return <Redirect to="/dashboard" />
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
              type="email"
              onChange={emailChangeHandler}
              required
            ></input>}</td>
          </tr>
          <tr>
            <td>
              {<input class="login_inputs"
                placeholder="PASSWORD"
                type="password"
                onChange={passwordChangeHandler}
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