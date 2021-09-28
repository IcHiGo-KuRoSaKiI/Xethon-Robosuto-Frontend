import React, { useState } from 'react';
import Header from '../Components/Header/Header';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Container, Row, Col } from 'react-bootstrap';
import "./EmployeeHome.css"
import ViewIssues from './ViewIssues/ViewIssues';
import IssueApprovals from './IssueApprovals/IssueApprovals';
import LeaderBoard from '../Components/LeaderBoard/LeaderBoard';

function EmployeeHome(props) {
  return (
    <div>
      <Header />
      <Container className="mainBody">
        <Tabs className="tabs">
          <TabList>
            <Tab><h4><b>View Issues</b></h4></Tab>
            <Tab><h4><b>View Approval Status</b></h4></Tab>
            <Tab><h4><b>LeaderBoard</b></h4></Tab>
          </TabList>
          <TabPanel>
            <ViewIssues />
          </TabPanel>
          <TabPanel>
            <IssueApprovals />
          </TabPanel>
          <TabPanel>
            <LeaderBoard />
          </TabPanel>
        </Tabs>
      </Container>
    </div>
  );
}

export default EmployeeHome;