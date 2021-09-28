import React, { useState } from 'react';
import "./QueryAccordian3.css"
import Accordion from 'react-bootstrap/Accordion'
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import { Form } from 'react-bootstrap';


function QueryAccordian3({ number, id, description, solution, status }) {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header><div className="issueID">Issue ID: {id}</div></Accordion.Header>
        <Accordion.Body>
          <Row>
            <Col md="12">
              <Row>
                <Col><b>Issue Description:</b></Col>
                <Col md="9" className="field"> {description}</Col>
              </Row>
              <Row>
                <Col ><b>Issue solution:</b></Col>
                <Col md="9" className="field">{solution}</Col>
              </Row>
            </Col>
          </Row>
          <br />
          <Row className="justify-content-around">
            <Col md="2">
              <div className="submitButton status">Status : {status}</div>
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion >
  );
}

export default QueryAccordian3;