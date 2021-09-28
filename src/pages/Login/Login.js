import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './Login.css'
import Login_Img from './login_img.jpeg'
import { Link, Redirect } from "react-router-dom";
import Select from 'react-select';
import { useStateValue } from "../../StateProvider"
import endPoints from "../../utils/EndPointApi"

const actions = [
  { label: "Admin", value: 1 },
  { label: "Student", value: 2 },
  { label: "Teacher", value: 3 }
];

function Login() {
  const [loginData , setLoginObject ] = useStateValue()
  const [reducerState, dispatch] = useStateValue()
  const [selectedType, setSelectedType] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [type, setType] = useState("student")
  const [authenticate, setAuthenticated] = useState(false)
  let history = useHistory();

  const LoginHandler2 = () => {
    console.log("login clicked", isLoggedIn, type)
    sessionStorage.setItem('isLoggedIn', JSON.stringify(type));
    history.push("/dashboard");
  }

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
  const LoginHandler = (event) => {
    event.preventDefault();
    const credentials = {
      userType: selectedType,
      username: enteredEmail,
      password: enteredPassword,
    };
    console.log(credentials)
    const uri = endPoints.loginURL + `?username=${enteredEmail}&password=${enteredPassword}`
    console.log("uri: ", uri)
    showData(uri)
      .then(data => {
        console.log(data, "abc");
        if (data[0].email) {
          console.log("LOGIN SUCCESSFULL")
          // sessionStorage.setItem('token', JSON.stringify(data.token));
          setLoginObject( data )
          setType(data[0].userType)
          setAuthenticated(true)
          dispatch({
            type: 'USER_LOGIN',
            type: data[0].type,
            sid: data._id
          })
          // sessionStorage.setItem('isLoggedIn', JSON.stringify(type));
          // history.push("/dashboard")
        }
        // dispatch({
        //   type: 'USER_LOGIN',
        //   type: data.token,
        //   userRole: data.role
        // }) // JSON data parsed by data.json() call
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

  if (authenticate == true) {
    console.log("login clicked", isLoggedIn, type)
    sessionStorage.setItem('isLoggedIn', JSON.stringify(type));
    if ( type == "Student") { return <Redirect to="/StudentHome" /> }
    else {  return <Redirect to="/AdminHome" /> }
  }


  return (
    <div id="master_body">
      <div id="inner_login_div">
        <table id="login_outer">
          <tr>
            <img src={Login_Img} id="login_img"></img>
          </tr>
          <tr>
            <td><Select options={actions} id="drop_down_login" onChange={userTypeHandler} /></td>
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