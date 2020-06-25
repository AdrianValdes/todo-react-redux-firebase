import React from 'react';
import Task from './Task';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

function Tasks({ tasks }) {
  return (
    <React.Fragment>
      <table
        className="table table-dark container"
        style={{ marginTop: '30px' }}
      >
        <thead>
          <tr className="text-info">
            <th scope="col">Tasks</th>
            <th scope="col">Added On</th>
            <th scope="col">Status</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks && tasks.map((task) => <Task key={task.id} task={task} />)}
        </tbody>
      </table>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  const tasks = state.firestore.ordered.tasks;
  return {
    tasks: tasks,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: 'tasks',
      //where: ['authorId', '==', ownProps.uid],
      orderBy: ['date', 'desc'],
    },
  ])
)(Tasks);
