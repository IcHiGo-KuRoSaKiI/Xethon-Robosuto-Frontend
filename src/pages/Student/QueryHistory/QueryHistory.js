import React from 'react';
import "./QueryHistory.css"
import { Container, Row, Col } from 'react-bootstrap';
import QueryAccordian from '../../Components/QueryAccordian/QueryAccordian';


function QueryHistory(props) {
  return (
    <Container>
      <Row>
        <Col>
          <Row className="centre"><h4>Total Issues Raised</h4></Row>
          <Row className="centre"><h5>3</h5></Row>
        </Col>
        <Col>
          <Row className="centre"><h4>Issues Solved</h4></Row>
          <Row className="centre"><h5>1</h5></Row>
        </Col>
        <Col>
          <Row className="centre"><h4>Issues Pending</h4></Row>
          <Row className="centre"><h5>2</h5></Row>
        </Col>
      </Row>
      <hr />
      <br />
      <QueryAccordian number="1" id="1" department="IT" status="solved" />
      <QueryAccordian number="2" id="2" department="IT" status="solved" />
      <QueryAccordian number="3" id="3" department="IT" status="solved" />
    </Container>
  );
}

export default QueryHistory;