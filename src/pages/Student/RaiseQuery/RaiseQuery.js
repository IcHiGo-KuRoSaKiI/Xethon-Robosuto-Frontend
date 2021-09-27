import React, { useState } from 'react';
import "./RaiseQuery.css"
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form'
import Select from 'react-select';

const departments = [
  { label: "Department 1", value: "Department 1" },
  { label: "Department 2", value: "Department 2" },
  { label: "Department 3", value: "Department 3" }
];

function RaiseQuery(props) {
  const [alert, setAlert] = useState(false)
  const FormSubmitHandler = (event) => {
    event.preventDefault()
    setAlert(true)
    event.target.reset()
  }

  return (
    <Container className="left">
      < Alert show={alert} variant="success" onClose={() => setAlert(false)} dismissible> your issue has been submited successfully</Alert >
      <Form onSubmit={FormSubmitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><b>Issue Title</b></Form.Label>
          <Form.Control type="text" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label><b>Issue Description</b></Form.Label>
          <Form.Control as="textarea" rows={2} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label><b>Issue category</b></Form.Label>
          {/* <Select options={departments} /> */}
          <Form.Select required>
            <option>Open this select menu</option>
            <option value="1">Department 1</option>
            <option value="2">Department 2</option>
            <option value="3">Department 3</option>
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