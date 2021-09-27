import React, { useState } from 'react';
import Header from '../Components/Header';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';
import "./ViewIssues.css"
import Dropdown from 'react-bootstrap/Dropdown'
import Accordion from 'react-bootstrap/Accordion'
import IssueAccordian from './IssuesAccordian/IssueAccordian';
import IssueAccordian2 from './IssuesAccordian/IssueAccordian2';
import MyVerticallyCenteredModal from './IssuesAccordian/alotting_issues';
function RaiseQuery(props) {
  const [key, setKey] = useState('home');
  return (
    <div>
      <Header />
      <Container className="mainBody">
        <Tabs className="tabs">
          <TabList>
          <Tab><h4><b>View Issues</b></h4></Tab>
            <Tab><h4><b>View Statistics</b></h4></Tab>
            <Tab><h4><b>View Approvals</b></h4></Tab>
          </TabList>
         
          <TabPanel>
            <Container>
                <MyVerticallyCenteredModal id="abc"/>
            </Container>
          </TabPanel>
          <TabPanel className="left">
                <Row>
                    <Col><h1><div class="piechart1"></div></h1>
                    </Col>
                    <Col><h1><div class="piechart2"></div></h1>
                    </Col>
                </Row>
                
          </TabPanel>
          <TabPanel>
            <h3><b>Query Tracker</b></h3>
            <IssueAccordian2 number="1" id="123456789" department="IT"  name="Siddharth Tewani" details="Bahut tang kaar rhe haaa" />
            <IssueAccordian2 number="2" id="123456789" department="IT" name="solved" details="ohohoho" />
            <IssueAccordian2 number="3" id="123456789" department="IT" name="solved" details="ohohoho"/>

          </TabPanel>
        </Tabs>
      </Container>
    </div>
  );
}

export default RaiseQuery;