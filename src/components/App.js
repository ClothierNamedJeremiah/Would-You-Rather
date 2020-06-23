import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { handleInitalData } from "../actions/shared";
import Login from './Login'
import Leaderboard from './Leaderboard'
import Dashboard from './Dashboard'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitalData());
  }
  
  render() {
    const { authedUser } = this.props;
    return (
      <Fragment>
        <Router>
          <Route path='/login' component={Login} />
          <Route exact path='/' component={Dashboard} />
          <Route path='/leaderboard' component={Leaderboard} />
        </Router>
      </Fragment>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(App);