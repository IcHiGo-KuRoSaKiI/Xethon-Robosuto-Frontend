import React, { useState } from 'react';
import "./QueryAccordian.css"
import { Container, Row, Col } from 'react-bootstrap';
import { Button, Form } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
import Modal from 'react-bootstrap/Modal'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
// import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Rating from 'react-simple-star-rating';

function QueryAccordian({ number, id, department, status }) {
  const [feedback, showFeedback] = useState(false)
  const [solution, showSolution] = useState(false)
  const [tracker, showTracker] = useState(false)
  const [activeStep, setActiveStep] = useState(3)
  const [rating, setRating] = useState(0)

  const FeedBackFormHandler = () => {
    showFeedback(!feedback)
  }
  const ViewSolutionHandler = () => {
    showSolution(!solution)
  }
  const ViewTrackerHandler = () => {
    showTracker(!tracker)
  }
  const SubmitFeedback = () => {
    showFeedback(!feedback)
  }
  const handleRating = (rate) => {
    setRating(rate)
  }

  const steps = [
    {
      label: 'Query Alloted',
      description: `Query has been alloted to the concerned person`,
    },
    {
      label: 'Query Stage 1',
      description: 'your query is being analysed',
    },
    {
      label: 'Query Stage 2',
      description: `your query is under process`,
    },
    {
      label: 'Query Stage 3',
      description: `query is under final approval by admin`,
    },
  ];

  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Issue {number}
        </Accordion.Header>
        <Accordion.Body>
          <Row className="justify-content-around">
            <Col md="4">
              Issue id: {id} <br />
              Issue Department: {department} <br />
              Issue Status: {status}
            </Col>
            <Col md="2">
              <Row><Button className="query_history_button" onClick={FeedBackFormHandler}>Give Feedback</Button></Row>
              <Row><Button className="query_history_button" onClick={ViewTrackerHandler}>Track status</Button></Row>
              <Row><Button variant="success" className="query_tracking_button" onClick={ViewSolutionHandler}>View Solution</Button></Row>
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
          {/* <Rating
            onClick={handleRating}
            ratingValue={rating}
            size={20}
            label
            transition
            fillColor='orange'
            emptyColor='gray'
            className='foo' // Will remove the inline style if applied
          /> */}
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
      <Modal
        show={tracker}
        size="md"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Current Status
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel>{step.label}</StepLabel>
                <StepContent>
                  <p>{step.description}</p>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <h4>All steps completed - you&apos;re finished</h4>
            </Paper>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={ViewTrackerHandler}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Accordion >
  );
}

export default QueryAccordian;