import React, { Component } from 'react';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
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
          <legend>
            <h4>Sign In</h4>
          </legend>
          <div className="form-group">
            <label htmlFor="email">Enter Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            SignIn
          </button>
        </form>
      </React.Fragment>
    );
  }
}
export default SignIn;
