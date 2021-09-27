import React from 'react';
import "./StudentHome.css";
import { Container, Row, Col } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Header from '../Components/Header/Header';
import QueryTracker from "./QueryTracker/QueryTracker"
import RaiseQuery from "./RaiseQuery/RaiseQuery"
import QueryHistory from "./QueryHistory/QueryHistory"

function StudentHome(props) {
  return (
    <div>
      <Header />
      <Container className="mainBody">
        <Tabs className="tabs">
          <TabList>
            <Tab><h4><b>Raise Query</b></h4></Tab>
            <Tab><h4><b>Query History</b></h4></Tab>
            <Tab><h4><b>Query Tracker</b></h4></Tab>
          </TabList>
          <TabPanel className="left">
            <RaiseQuery />
          </TabPanel>
          <TabPanel>
            <QueryHistory />
          </TabPanel>
          <TabPanel>
            <QueryTracker />
          </TabPanel>
        </Tabs>
      </Container>
    </div>
  );
}

export default StudentHome;