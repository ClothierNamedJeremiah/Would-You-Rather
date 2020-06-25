import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    const {authedUser, users, questions} = this.props;

    // if (authedUser === null) {
    //   return <Redirect to='/login' />
    // }
    // TODO: don't hardcode it
    let authed = 'johndoe'

    return (
      <div>
        <h1>Would You Rather?</h1>
      </div>
    );
  }
}

function mapStateToProps ({ authedUser, users, questions }) {
  return {
    authedUser,
    users,
    questions,
  }
}

export default connect(mapStateToProps)(Dashboard);