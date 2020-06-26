import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { setAuthedUser } from '../actions/authedUser'

class Navbar extends Component {
  
  handleLogout = (e) => {
    e.preventDefault();
    this.props.dispatch(setAuthedUser());
  }

  render() {
    const { authedUser } = this.props;

    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink exact to='/' activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/add' activeClassName='active'>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active'>
              Leaderboard
            </NavLink>
          </li>
          <li style={{color:'grey', fontStyle:'italic'}}> 
           Logged in as {authedUser}
          </li>
          <li>
            <NavLink to='/login' activeClassName='active' onClick={this.handleLogout}>
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(Navbar);