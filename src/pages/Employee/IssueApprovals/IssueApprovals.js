import React from 'react';
import QueryAccordian3 from "../../Components/QueryAccordian/QueryAccordian3"

function IssueApprovals(props) {
  return (
    <div>
      <QueryAccordian3 id="1" solution="solution1" description="IT1 blah blah1" status="solved" />
      <QueryAccordian3 id="2" solution="solution2" description="IT2 blah blah2" status="solved" />
      <QueryAccordian3 id="3" solution="solution3" description="IT3 blah blah3" status="solved" />
    </div>
  );
}

export default IssueApprovals;