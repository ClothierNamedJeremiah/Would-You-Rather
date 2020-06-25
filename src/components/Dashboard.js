import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import ListQuestions from './ListQuestions';

class Dashboard extends Component {
  render() {
    const {authedUser, users, questions} = this.props;

    if (authedUser === null) {
      return <Redirect to='/login' />
    }

    const unanswered_questions = Object.keys(questions).filter((id) => (
      questions[id].optionOne.votes.includes(authedUser) || questions[id].optionTwo.votes.includes(authedUser)
    ));

    const answered_questions = Object.keys(questions).filter((id) => (
      !(questions[id].optionOne.votes.includes(authedUser) || questions[id].optionTwo.votes.includes(authedUser))
    ));

    return (
      <div>
        <h1>Would You Rather?</h1>
        <h3>Welcome {authedUser}</h3>
        <ListQuestions title='Unanswered Questions' questions={unanswered_questions.map(id => questions[id])}/>
        <ListQuestions title='Answered Questions' questions={answered_questions.map(id => questions[id])}/>
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