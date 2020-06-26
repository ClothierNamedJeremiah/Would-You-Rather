import React, { Component } from 'react';
import { connect } from 'react-redux'

import NoMatch from './NoMatch'
import { handleAddVote } from '../actions/shared'

class QuestionPage extends Component {
  
  state = {
    answer: '',
  }

  handleChange = (e) => {
    const answer = e.target.value;
    this.setState(() => ({
      answer,
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { authedUser, question } = this.props;
    const { answer } = this.state;
    this.props.dispatch(handleAddVote({
      authedUser, 
      qid: question.id,
      answer,
    }));
    
  }

  render() {
    const { authedUser, users, question } = this.props;
    
    // Case: The question does not exist
    if (question === undefined) {
      return (
        <NoMatch />
      )
    }

    // Case: The authedUser has answered the Question
    if (question.id in users[authedUser].answers){
      console.log("%cI Have answered this before","color:cyan");
      const optionOneCount = question.optionOne.votes.length;
      const optionTwoCount = question.optionTwo.votes.length;
      const authedUserAnswer = users[authedUser].answers[question.id]
      console.log(optionOneCount, optionTwoCount, authedUserAnswer);

      return (
        <div className='container'>
          <img className='avatar' src={users[question.author].avatarURL}/>
          <p>written by {question.author}</p>
          <div>
            <p style={authedUserAnswer === 'optionOne' ? {backgroundColor:'#8dd88d'} : {}} >{question.optionOne.text} | Vote Count: {optionOneCount}/{optionOneCount+optionTwoCount} </p>
            <p style={authedUserAnswer === 'optionTwo' ? {backgroundColor:'#8dd88d'} : {}}>{question.optionTwo.text} | Vote Count: {optionTwoCount}/{optionOneCount+optionTwoCount}</p>
          </div>
        </div>
      );
    }
    
    // Case: The authedUser has not answered the Question
    return (
      <div className='container'>
        <img className='avatar' src={users[question.author].avatarURL}/>
        <p>written by {question.author}</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type='radio' value='optionOne' onChange={this.handleChange} checked={this.state.answer === 'optionOne'}/> {question.optionOne.text}
          </label><br />
          
          <label>
            <input type='radio' value='optionTwo' onChange={this.handleChange} checked={this.state.answer === 'optionTwo'}/> {question.optionTwo.text}
          </label><br />
          <button disabled={this.state.answer === ''}>Submit</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({authedUser, users, questions}, props) {
  const { id } = props.match.params;
  
  return {
    authedUser,
    users,
    question: questions[id]
  }
}

export default connect(mapStateToProps)(QuestionPage);