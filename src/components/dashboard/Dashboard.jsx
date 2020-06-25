import React from 'react';
import Addtask from '../tasks/AddTask';
import Tasks from '../tasks/Tasks';

function Dashboard() {
  return (
    <React.Fragment>
      <Addtask />
      <Tasks />
    </React.Fragment>
  );
}

export default Dashboard;
