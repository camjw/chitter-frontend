import React from 'react';
import PropTypes from 'prop-types';
import './UserSignIn.css';

export default class UserSignIn extends React.Component {
  constructor(props) {
    super(props);
    const { signInUser } = props;
    this.signInUser = (handle, password) => signInUser(handle, password);
    this.updateUsername = (event) => {
      this.setState({ username: event.target.value });
    };
    this.updatePassword = (event) => {
      this.setState({ password: event.target.value });
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h3>Sign into Chitter</h3>
        </div>
        <div className="row">
          <label>User name: </label>
          <input id="userName" type="text" onChange={this.updateUsername} />
          {' '}
          <br />
          <label>Password: </label>
          <input id="password" type="text" onChange={this.updatePassword} />
          <br />
        </div>
        <div className="row">
          <button className="btn btn-primary" type="submit" onClick={() => this.signInUser(this.state.username, this.state.password)}>
            Sign In
          </button>
        </div>
      </div>
    );
  }
}
