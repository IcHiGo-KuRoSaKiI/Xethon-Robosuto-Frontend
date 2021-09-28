import React from 'react';
import "./IssueAccordian.css"
import Accordion from 'react-bootstrap/Accordion'
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import IssueTracker from '../IssueTracker/IssueTracker';
import Select from 'react-select';

function IssueAccordian({ number, id, department, name, details }) {
  const departments = [
    { label: "", value: 0 },
  ];

  const dept_person = [
    { label: "A", value: 0 },
    { label: "B", value: 0 }, ,
    { label: "C", value: 0 },
    { label: "D", value: 0 },
    { label: "E", value: 0 }
  ];

  const priority = [
    { label: "HIGH", value: 0 },
    { label: "MEDIUM", value: 0 },
    { label: "LOW", value: 0 }
  ];

  const time_alot = [
    { label: "----------------Select-----------------", value: 0 }
  ];
  const [modalShow1, setModalShow1] = React.useState(false);
  const showmodalhandler1 = () => {
    setModalShow1(!modalShow1)

  }



  const [modalShow, setModalShow] = React.useState(false);
  const showmodalhandler = () => {
    setModalShow(!modalShow)

  }

  return (




    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header><h5>Issue {number}</h5></Accordion.Header>
        <Accordion.Body>
          <Row className="justify-content-around">
            <Col md="4">
              <Row>Issues Raised By:</Row>
              <Row>{name}</Row>
              <Row>Issues Description:</Row>
              <Row>{details}</Row>
            </Col>
            <Col md="2">
              <Row><Button className="query_history_button" onClick={showmodalhandler1}>Track Issue</Button></Row>
              <br />
            </Col>

          </Row>
          <Col md="2">
            <Row>
              <Col>
                <Row><Button className="query_history_button1" onClick={showmodalhandler} >Alot Issue</Button></Row>
              </Col>
              <Col><Row><Button className="query_history_button1">Reply FAQ</Button></Row>
              </Col>
            </Row>
          </Col>




        </Accordion.Body>
      </Accordion.Item>
      <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 id="alot_issue_head_main">Allotting Issue</h4>
          <p id="issue_id_admin_alot">Issue Id-XE-00100</p>

          <p id="alotting_issue_desc_head">
            <strong>Query Description</strong>
          </p>

          <p id="alot_issue_desc">Zindagi barbad hogyaaaaaaaaaaaaaaaaaaaa</p>
          <p>
            Alot to Department
          </p>
          <Select options={departments} class="alotment_dropdowns" />
          <p>
            Department Person
          </p>
          <Select options={dept_person} />
          <p>
            Priority
          </p>
          <Select options={priority} />
          <p>
            Time Alotment
          </p>
          <Select options={time_alot} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={showmodalhandler}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={modalShow1}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Tracking Issue
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <h5 id="tracker_id_css">Issue ID-001</h5>
          <IssueTracker />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={showmodalhandler1}>Close</Button>
        </Modal.Footer>
      </Modal>



      {/* <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
    /> */}
    </Accordion>

  );
}

export default IssueAccordian;