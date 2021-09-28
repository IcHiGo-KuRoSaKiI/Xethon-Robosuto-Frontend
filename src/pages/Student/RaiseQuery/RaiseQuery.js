import React, { useState } from 'react';
import "./RaiseQuery.css"
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form'
import Select from 'react-select';
import { useStateValue } from "../../../StateProvider"
import { useHistory } from "react-router-dom"

const departments = [
  { label: "Artificial Intelligence", value: "AI" },
  { label: "Big Data", value: "Big_Data" },
  { label: "Cloud Computing", value: "Cloud_Computing" }
];

function RaiseQuery(props) {
  const [loginData, setLoginObject] = useStateValue()
  const [alert, setAlert] = useState(false)
  const [reducerState, dispatch] = useStateValue()
  // const [selectedType, setSelectedType] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [userIssueTitle, setUserIssueTitle] = useState("");
  const [userIssue, setUserIssue] = useState("");
  const [username, setUsername] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [type, setType] = useState("student")
  const [authenticate, setAuthenticated] = useState(false)
  let history = useHistory();

  const userDepartmentHandler = (event) => {
    setSelectedDepartment(event.value);
    console.log(event.target.value)
  };
  const userIssueDescriptionHandler = (event) => {
    setUserIssue(event.target.value);
    console.log(event.target.value)
  };

  const userIsueTitleHandler = (event) => {
    setUserIssueTitle(event.target.value);
    console.log(event.target.value)
  };

  const FormSubmitHandler = (event) => {
    console.log("login clicked", isLoggedIn, type)
    console.log(isLoggedIn)
    event.preventDefault()
    setAlert(true)
    event.target.reset()
    const credentials = {
      userType: type,
      username: enteredEmail,
      password: enteredPassword,
      Department: selectedDepartment
    };
  }

  return (
    <Container className="left">
      < Alert show={alert} variant="success" onClose={() => setAlert(false)} dismissible> your issue has been submited successfully</Alert >
      <Form onSubmit={FormSubmitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><b>Issue Title</b></Form.Label>
          <Form.Control type="text" onChange={userIsueTitleHandler} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label><b>Issue Description</b></Form.Label>
          <Form.Control as="textarea" onChange={userIssueDescriptionHandler} rows={2} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">

          <Form.Label ><b>Issue category</b></Form.Label>
          {/* <Select options={departments} id="drop_down_signup" onChange={userDepartmentHandler} /> */}
          <Form.Select onChange={userDepartmentHandler} required>
            <option>Open this select menu</option>
            <option value="AI">Artificial Intelligence</option>
            <option value="Big_Data" >Big Data</option>
            <option value="Cloud_Computing" >Cloud Computing</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label><b>Screenshot related to the issue (if any)</b></Form.Label><br />
          <Form.Control type="file" />
        </Form.Group>
        <Button type="submit" className="submitButton">
          Raise Query
        </Button>
      </Form >
    </Container >
  );
}
export default RaiseQuery;