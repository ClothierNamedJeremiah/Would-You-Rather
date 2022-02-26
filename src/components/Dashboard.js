import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { _getQuestions } from '../utils/api';

import './dashboard.css';
import ListQuestions from './ListQuestions';
import { useAuthedUser } from '../authedUser';

export default function Dashboard() {
  const [showAll, setShowAll] = useState(false);
  const authedUser = useAuthedUser();
  const questionsQuery = useQuery('questions', _getQuestions);
  const questions = questionsQuery.data || [];

  const handleChange = () => {
    setShowAll((state) => !state);
  };

  const answeredQuestions = Object.keys(questions).filter(
    (id) =>
      questions[id].optionOne.votes.includes(authedUser) ||
      questions[id].optionTwo.votes.includes(authedUser),
  );

  const unansweredQuestions = Object.keys(questions).filter(
    (id) =>
      !(
        questions[id].optionOne.votes.includes(authedUser) ||
        questions[id].optionTwo.votes.includes(authedUser)
      ),
  );

  return (
    <div>
      <h2>Show Questions Answered</h2>
      <label className="switch" htmlFor="show-all">
        <input type="checkbox" checked={showAll} onChange={handleChange} id="show-all" />
        <span className="slider round" />
      </label>

      {!showAll && (
        <ListQuestions
          title="Unanswered Questions"
          questions={unansweredQuestions.map((id) => questions[id])}
        />
      )}

      {showAll && (
        <ListQuestions
          title="Answered Questions"
          questions={answeredQuestions.map((id) => questions[id])}
        />
      )}
    </div>
  );
}
