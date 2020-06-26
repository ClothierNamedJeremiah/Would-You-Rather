import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import { handleAddQuestion } from '../actions/shared';

class NewQuestion extends Component {

  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false,
  }

  handleInput = (e) => {
    e.preventDefault();
    const key = e.target.name;
    const value = e.target.value;

    this.setState(() => ({
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

    this.setState(() => ({
      toHome: true
    }));
  }

  render() {
    const { optionOneText, optionTwoText, toHome } = this.state;

    if (toHome) {
      return <Redirect to='/' />
    }

    // TODO: user types really fast, what is the actual state
    return (
      <div className = 'container'>
        <form className='new-question' onSubmit={this.handleSubmit}>
          <input name='optionOneText' type='text' placeholder='Option 1' value={optionOneText} onChange={this.handleInput}></input>
          <input name='optionTwoText' type='text' placeholder='Option 2' value={optionTwoText} onChange={this.handleInput}></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewQuestion;