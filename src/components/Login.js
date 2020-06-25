import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

import './Login.css'

class Login extends Component {

  state = {
    user: 'default',
  }

  handleLogin = (e) => {
    e.preventDefault();
    
    const { user } = this.state;
    const { dispatch } = this.props;

    dispatch(setAuthedUser(user));
  }

  handleChange = (e) => {
    e.preventDefault();
    
    const user = e.target.value;
    this.setState(() => ({
      user,
    }));

  }

  render() {
    const { authedUser, users } = this.props;

    if (authedUser !== null) {
      return <Redirect to='/' />
    }

    return (
      <div className='center'>
        <h1>Login</h1>
        <form onSubmit={this.handleLogin}>
          <select defaultValue={this.state.user} onChange={this.handleChange}>
            <option disabled name='default' value='default'>Select a User</option>
            {Object.keys(users).map((user) => (
              <option key={user} name={user} value={user}>{user}</option>
            ))}
          </select>
          <div>
            <button className='btn'>Next</button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps ({authedUser, users}) {
  return {
    authedUser,
    users,
  }
}

export default connect(mapStateToProps)(Login);