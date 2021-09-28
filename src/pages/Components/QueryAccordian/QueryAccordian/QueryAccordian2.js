import React, { useState } from 'react';
import "./QueryAccordian2.css"
import Accordion from 'react-bootstrap/Accordion'
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import { Form } from 'react-bootstrap';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
// import { Button as Button2 } from '@mui/material/Button';
import Paper from '@mui/material/Paper';


const steps = [
  {
    label: 'Query Alloted',
    description: `issue has been alloted to you`,
  },
  {
    label: 'Query Stage 1',
    description: 'issue Analysed',
  },
  {
    label: 'Query Stage 2',
    description: `processing the issue`,
  },
  {
    label: 'Query Stage 3',
    description: `send for approval to admin`,
  },
];

function QueryAccordian2({ number, id, title, description, status }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [solution, showSolution] = useState(false)
  const [stat, updateStatus] = useState(false)

  const SolveIssueHandler = () => {
    showSolution(!solution)
  }
  const SubmitSolution = () => {
    showSolution(!solution)
  }
  const ContactStudentHandler = () => {
    showSolution(!solution)
  }
  const updateStatusHandler = () => {
    updateStatus(!stat)
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header><div className="issueID">Issue ID: {id}</div></Accordion.Header>
        <Accordion.Body>
          <Row>
            <Col md="12">
              <Row className="justify-content-start">
                <Col><b>Issue id:</b></Col>
                <Col md="9" className="field">{id}</Col>
              </Row>
              <Row>
                <Col ><b>Issue title:</b></Col>
                <Col md="9" className="field">{title}</Col>
              </Row>
              <Row>
                <Col><b>Issue Description:</b></Col>
                <Col md="9" className="field"> {description}</Col>
              </Row>
              {/* <Row>
                <Col><b>Issue Status:</b></Col>
                <Col md="9" className="field">{status}</Col>
              </Row> */}
            </Col>
          </Row>
          <br />
          <Row className="justify-content-around">
            <Col md="2">
              <Button className="submitButton" onClick={SolveIssueHandler}>Solve Issue</Button>
            </Col>
            <Col md="2">
              <Button className="submitButton" onClick={ContactStudentHandler} disabled>Contact Student</Button>
            </Col>
            <Col md="2">
              <Button className="submitButton" onClick={updateStatusHandler}>Update Status</Button>
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
      <Modal
        show={solution}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Give Solution
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className="centre"><u>ISSUE ID :</u> {id}</h5>
          <Form onSubmit={SubmitSolution}>
            <Form.Group className="mb-3">
              <Form.Control as="textarea" rows={3} placeholder="Write the solution here..." required />
            </Form.Group>
            <Button variant="primary" type="submit" className="submitButton">
              Submit Solution
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={SolveIssueHandler}>Close</Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={stat}
        size="md"
        // aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Status Update
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className="centre"><u>ISSUE ID :</u> {id}</h5>
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
          <div>
            <Button className="button1"
              variant="success"
              onClick={handleNext}
              sx={{ mt: 1, mr: 1 }}
            >
              {activeStep === steps.length - 1 ? 'Finish' : 'Update'}
            </Button>
            <Button className="button1"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mt: 1, mr: 1 }}
            >
              Back
            </Button>
          </div>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <h4>All steps completed - you&apos;re finished</h4>
            </Paper>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={updateStatusHandler}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Accordion >
  );
}

export default QueryAccordian2;