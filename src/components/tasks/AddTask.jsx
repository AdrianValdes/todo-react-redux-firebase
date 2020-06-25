import React, { Component } from 'react';

class Addtask extends Component {
  state = {
    task: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <form
          className="container"
          autoComplete="off"
          style={{ marginTop: '38px' }}
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="task">Enter Task</label>
            <input
              type="text"
              className="form-control"
              id="task"
              onChange={this.handleChange}
              value={this.state.task}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </React.Fragment>
    );
  }
}
export default Addtask;
