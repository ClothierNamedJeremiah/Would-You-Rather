import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

import './dashboard.css';
import ListQuestions from './ListQuestions';

class Dashboard extends Component {

  state = {
    showAll: false,
  }

  handleChange = () => {
    this.setState((prevState) => ({
      showAll: !prevState.showAll,
    }));
  }

  render() {
    const {authedUser, questions} = this.props;

    if (authedUser === null) {
      return <Redirect to='/login' />
    }

    const answered_questions = Object.keys(questions).filter((id) => (
      questions[id].optionOne.votes.includes(authedUser) || questions[id].optionTwo.votes.includes(authedUser)
    ));

    const unanswered_questions = Object.keys(questions).filter((id) => (
      !(questions[id].optionOne.votes.includes(authedUser) || questions[id].optionTwo.votes.includes(authedUser))
    ));

    return (
      <div>
      <h2>Show Questions Answered</h2>
        <label className="switch">
          <input type="checkbox" checked={this.state.showAll} onChange={this.handleChange}/>
          <span className="slider round" />
        </label>

        {!this.state.showAll && 
          <ListQuestions title='Unanswered Questions' questions={unanswered_questions.map(id => questions[id])}/>
        }
        
        {this.state.showAll && 
          <ListQuestions title='Answered Questions' questions={answered_questions.map(id => questions[id])}/>
        }
      </div>
    );
  }
}

function mapStateToProps ({ authedUser, users, questions }) {
  return {
    authedUser,
    questions,
  }
}

export default connect(mapStateToProps)(Dashboard);