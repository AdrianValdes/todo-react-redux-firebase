import React from 'react';
import moment from 'moment';
import { removeTask, toggleTask } from '../../actions/taskActions';
import { connect } from 'react-redux';
import Check from './Check';

const Task = ({ task, removeTask, toggleTask }) => {
  const handelRemoveTask = (task) => {
    removeTask(task);
  };

  const handleToggle = (task) => {
    toggleTask(task);
  };

  return (
    <React.Fragment>
      <tr>
        <th>{task.task}</th>
        <td>{moment(task.date.toDate()).calendar()}</td>
        <td>
          <Check onClick={() => handleToggle(task)} checked={task.checked} />
        </td>
        <td>
          <span
            className="material-icons text-danger"
            style={{ cursor: 'pointer' }}
            onClick={() => handelRemoveTask(task)}
          >
            delete
          </span>
        </td>
      </tr>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeTask: (task) => dispatch(removeTask(task)),
    toggleTask: (task) => dispatch(toggleTask(task)),
  };
};

export default connect(null, mapDispatchToProps)(Task);
