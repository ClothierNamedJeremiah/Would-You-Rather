import React, { Component } from 'react';
import { connect } from 'react-redux'

import { handleInitalData } from "../actions/shared";
import Login from './Login'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitalData());
  }
  
  render() {
    console.log("Rendering App")
    const { authedUser } = this.props;
    if (authedUser === null) {
      return (
        <Login />
      );
    }

    return (
      <div>
        Hello
      </div>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(App);