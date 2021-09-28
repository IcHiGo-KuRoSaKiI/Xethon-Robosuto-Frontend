import React, { useState } from 'react';
import "./QueryAccordian.css"
import Accordion from 'react-bootstrap/Accordion'
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import { Form } from 'react-bootstrap';

function QueryAccordian({ number, id, department, status }) {
  const [feedback, showFeedback] = useState(false)
  const [solution, showSolution] = useState(false)

  const FeedBackFormHandler = () => {
    showFeedback(!feedback)
  }
  const ViewSolutionHandler = () => {
    showSolution(!solution)
  }
  const SubmitFeedback = () => {
    showFeedback(!feedback)
  }

  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Issue {number}</Accordion.Header>
        <Accordion.Body>
          <Row className="justify-content-around">
            <Col md="4">
              Issue id: {id} <br />
              Issue Department: {department} <br />
              Issue Status: {status}
            </Col>
            <Col md="2">
              <Row><Button className="query_history_button" onClick={FeedBackFormHandler}>Give Feedback</Button></Row>
              <br />
              <Row><Button className="query_history_button" onClick={ViewSolutionHandler}>View Solution</Button></Row>
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
      <Modal
        show={feedback}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Issue Feedback
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className="centre"><u>ISSUE ID :</u> {id}</h5>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control as="textarea" rows={3} placeholder="Write your feedback here..." />
          </Form.Group>
          <Button variant="primary" type="submit" className="submitButton" onClick={SubmitFeedback}>
            Submit Feedback
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={FeedBackFormHandler}>Close</Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={solution}
        size="md"
        // aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Issue Solution
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className="centre"><u>ISSUE ID :</u> {id}</h5>
          <div className="solutionBox">
            <p className="solution">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In earum quisquam asperiores vero impedit, eligendi distinctio aliquam perspiciatis, nisi iure fugit doloribus totam vel. Iste reprehenderit delectus facilis natus autem!</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={ViewSolutionHandler}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Accordion>
  );
}

export default QueryAccordian;