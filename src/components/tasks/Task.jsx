import React from 'react';

const Task = () => {
  return (
    <React.Fragment>
      <tr>
        <th>Learn react</th>
        <td>20/03/20</td>
        <td>
          <span className="material-icons" style={{ cursor: 'pointer' }}>
            check_circle
          </span>
        </td>
        <td>
          <span
            className="material-icons text-danger"
            style={{ cursor: 'pointer' }}
          >
            delete
          </span>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default Task;
