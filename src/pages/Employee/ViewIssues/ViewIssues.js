import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import QueryAccordian2 from "../../Admin/IssuesAccordian/IssueAccordian2"

function ViewIssues(props) {
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
      <QueryAccordian2 id="1" title="title1" description="IT1 blah blah1" status="solved" />
      <QueryAccordian2 id="2" title="title2" description="IT2 blah blah2" status="solved" />
      <QueryAccordian2 id="3" title="title3" description="IT3 blah blah3" status="solved" />
    </Container>
  );
}

export default ViewIssues;