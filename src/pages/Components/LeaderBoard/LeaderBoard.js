import React from 'react';
import "./LeaderBoard.css"
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MDBDataTableV5 } from 'mdbreact';

function LeaderBoard(props) {

  const tableRows = [
    {
      id: <div className="empID">emp1</div>,
      name: "name 1",
      rating: "rating 1",
      score: "score 1",
    },
    {
      id: <div className="empID">emp 2</div>,
      name: "name 2",
      rating: "rating 2",
      score: "score 2",
    },
    {
      id: <div className="empID">emp 3</div>,
      name: "name 3",
      rating: "rating 3",
      score: "score 3",
    },
  ]
  // const tableRows = []
  // if (userList.length > 0) {
  //   {
  //     userList?.map(emp => {
  //       tableRows.push({
  //         id: <div className="empID">emp.id</div>,
  //         name: emp.name,
  //         reting: rating,
  //         score: emp.score,
  //       })
  //     })
  //   }
  // }

  const dataTable = {
    columns: [
      {
        label: 'Employee ID',
        field: 'id',
        width: 100,
      },
      {
        label: 'Employee Name',
        field: 'name',
        width: 100,
      },
      {
        label: 'Ratings',
        field: 'rating',
        width: 100,
      },
      {
        label: 'Overall Score',
        field: 'score',
        width: 100,
      },
    ],
    rows: tableRows
  }
  const widerData = {
    columns: [
      ...dataTable.columns.map((col) => {
        col.width = 200;
        return col;
      }),
    ],
    rows: [...dataTable.rows],
  }

  return (
    <Container fluid >
      <Row className="month">Monthly Scores</Row>
      <MDBDataTableV5 className="board" striped bordered hover entriesOptions={[5, 10, 15]} entries={5} pagesAmount={4} data={dataTable} />
    </Container>
  );
}

export default LeaderBoard;