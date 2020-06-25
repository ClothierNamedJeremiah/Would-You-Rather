import React, { Component } from 'react';
import { connect } from 'react-redux'

import NoMatch from './NoMatch'

class QuestionPage extends Component {
  
  render() {
    const { authedUser, users, question } = this.props;
    console.group('Props');
      console.log(question);
      console.log(users);
    console.groupEnd();

    if (question === undefined) {
      return (
        <NoMatch />
      )
    }
    
    return (
      <div className='container'>
        <img className='avatar' src={users[question.author].avatarURL}/>
        <p>written by {question.author}</p>
        <p>{question.optionOne.text} </p>
        <p>{question.optionTwo.text}</p>
      </div>
    );
  }
}

// When we render
function mapStateToProps({authedUser, users, questions}, props) {
  const { id } = props.match.params;
  
  return {
    authedUser,
    users,
    question: questions[id]
  }
}

export default connect(mapStateToProps)(QuestionPage);