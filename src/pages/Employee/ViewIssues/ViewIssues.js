import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import QueryAccordian2 from "../../Components/QueryAccordian/QueryAccordian/QueryAccordian2"
import Issues from "../../../SampleData/issues"

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
      {Issues.map((issue, idx) => {
        return (
          <QueryAccordian2 id={issue.issueID} title={issue.issueTitle} description={issue.issueDescription} status={issue.issueStatus} />
        )
      })}
    </Container>
  );
}

export default ViewIssues;