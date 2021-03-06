import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { handleInitalData } from "../actions/shared";
import Login from './Login'
import Leaderboard from './Leaderboard'
import NewQuestion from './NewQuestion';
import Dashboard from './Dashboard'
import Navbar from './Navbar';
import QuestionPage from './QuestionPage';



class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitalData());
  }
  
  render() {
    const { authedUser } = this.props;

    if (authedUser === null) {
      return (
        <Router>
          <Login />
        </Router>
      );
    }

    return (
        <Router>
          <Fragment>
            <div className='container'>
              <Navbar />
              <h1>Would you Rather?</h1>
              <Route exact path='/' component={Dashboard} />
              <Route path='/question/:id' component={QuestionPage} />
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