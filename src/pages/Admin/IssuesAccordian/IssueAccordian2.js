import React from 'react';
import "./IssueAccordian2.css"
import Accordion from 'react-bootstrap/Accordion'
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function IssueAccordian2({ number, id,department,name, details }) {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Issue {number}</Accordion.Header>
        <Accordion.Body>
          <Row className="justify-content-around2">
            <Col md="4">
              <Row>Issues Raised By:</Row>
              <Row classname="details_issue2">{name}</Row>
              <Row>Issues Description:</Row>
              <Row classname="details_issue2">{details}</Row>
            </Col>
            
            
          </Row>
          <Col md="2">
              <Row>
                <Col>
                <Row><Button className="query_history_button1">Approve</Button></Row>
                </Col>
              <Col><Row><Button className="query_history_button1">Alot Again</Button></Row>
              </Col>       
              </Row>
           </Col>
           
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default IssueAccordian2;