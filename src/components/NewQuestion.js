import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

import { handleAddQuestion } from '../actions/questions';

class NewQuestion extends Component {

  state = {
    optionOneText: '',
    optionTwoText: '',
  }

  handleInput = (e) => {
    e.preventDefault();
    const key = e.target.name;
    const value = e.target.value;

    this.setState((prevState) => ({
      [key]: value
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, authedUser } = this.props;
    const { optionOneText, optionTwoText } = this.state;
    
    dispatch(handleAddQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    }))

    // redirect to home page
  }

  render() {
    const { users, questions, authedUser } = this.props;
    const { optionOneText, optionTwoText } = this.state;

    // if (authedUser === null) {
    //   return <Redirect to='/login' />
    // }

    // TODO: user types really fast, what is the actual state
    return (
      <div>
        <form className='new-question' onSubmit={this.handleSubmit}>
          <input name='optionOneText' type='text' placeholder='Option 1' value={optionOneText} onChange={this.handleInput}></input>
          <input name='optionTwoText' type='text' placeholder='Option 2' value={optionTwoText} onChange={this.handleInput}></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({users, questions, authedUser}) {
  return {
    users,
    questions,
    authedUser,
  }
}

export default connect(mapStateToProps)(NewQuestion);