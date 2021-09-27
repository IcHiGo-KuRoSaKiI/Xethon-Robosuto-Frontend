import React from 'react';
import "./Header.css";
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Dropdown } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';


function Header(props) {
  return (
    <Row className="header justify-content-between">
      <Col md="3" className="brandTitle"><h4><b>XEBIA ISSUE TRACKER</b></h4></Col>
      <Col md="3">
        <Dropdown as={ButtonGroup}>
          <Button size="md" variant="success">Student</Button>
          <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
            {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    </Row>
  );
}

export default Header;