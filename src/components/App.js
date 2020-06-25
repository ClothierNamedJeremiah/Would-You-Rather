import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { handleInitalData } from "../actions/shared";
import Login from './Login'
import Leaderboard from './Leaderboard'
import NewQuestion from './NewQuestion';
import Dashboard from './Dashboard'
import Navbar from './Navbar';



class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitalData());
  }
  
  render() {
    const { authedUser } = this.props;

    return (
        <Router>
          <Fragment>
            <div className='container'>
              <Navbar />
              <Route exact path='/' component={Dashboard} />
              <Route path='/leaderboard' component={Leaderboard} />
              <Route path='/add' component={NewQuestion} />
              <Route path='/login' component={Login} />
            </div>
          </Fragment>
        </Router>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(App);