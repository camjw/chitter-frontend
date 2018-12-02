import React from 'react';
import PropTypes from 'prop-types';
import './UserSignUp.css'

export default class UserSignUp extends React.Component {
  constructor(props) {
    super();
    const { createUser } = props;
    this.createNewUser = (handle, password) => createUser(handle, password);
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <h3>Sign up for Chitter</h3>
        </div>
        <div className='row'>
          <label>User name: </label><input id='userName' type='text' onChange={this.updateUsername}/> <br/>
          <label>Password: </label><input id='password' type='text' onChange={this.updatePassword}/><br/>
          <label>Confirm password: </label><input id='passwordConfirm' type='text' onChange={this.updatepasswordConfirm}/><br/>
        </div>
        <div className='row'>
          <button className='btn btn-primary' type="submit" onClick={() => this.createNewUser()}>
            Sign up
          </button>
        </div>
      </div>
    );
  }
}

UserSignUp.propTypes = {
  createUser: PropTypes.func.isRequired,
};
