import React, { useState } from 'react';
import { useMutation, useQueries, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';

import NoMatch from './NoMatch';
import { _getQuestions, _getUsers, _saveQuestionAnswer } from '../utils/api';
import { useAuthedUser } from '../authedUser';

export default function QuestionPage() {
  const [answer, setAnswer] = useState('');
  const authedUser = useAuthedUser();
  const params = useParams();

  const query = useQueries([
    {
      queryKey: 'questions',
      queryFn: _getQuestions,
    },
    {
      queryKey: 'users',
      queryFn: _getUsers,
    },
  ]);

  const queryClient = useQueryClient();
  const mutation = useMutation((vote) => _saveQuestionAnswer(vote), {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
      queryClient.invalidateQueries('questions');
    },
  });

  if (!query[0].data || !query[1].data) {
    return null;
  }

  const question = query[0].data[params.id];
  const users = query[1].data;

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      authedUser,
      qid: question.id,
      answer,
    });
  };

  // Case: The question does not exist
  if (question === undefined) {
    return <NoMatch />;
  }

  // Case: The authedUser has answered the Question
  if (question.id in users[authedUser].answers) {
    const optionOneCount = question.optionOne.votes.length;
    const optionTwoCount = question.optionTwo.votes.length;
    const authedUserAnswer = users[authedUser].answers[question.id];

    return (
      <div className="container">
        <img className="avatar" src={users[question.author].avatarURL} />
        <p>written by {question.author}</p>
        <div>
          <p style={authedUserAnswer === 'optionOne' ? { backgroundColor: '#8dd88d' } : {}}>
            {question.optionOne.text} | Vote Count: {optionOneCount}/
            {optionOneCount + optionTwoCount}{' '}
          </p>
          <p style={authedUserAnswer === 'optionTwo' ? { backgroundColor: '#8dd88d' } : {}}>
            {question.optionTwo.text} | Vote Count: {optionTwoCount}/
            {optionOneCount + optionTwoCount}
          </p>
        </div>
      </div>
    );
  }

  // Case: The authedUser has not answered the Question
  return (
    <div className="container">
      <img className="avatar" src={users[question.author].avatarURL} />
      <p>written by {question.author}</p>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            value="optionOne"
            onChange={() => setAnswer('optionOne')}
            checked={answer === 'optionOne'}
          />{' '}
          {question.optionOne.text}
        </label>
        <br />

        <label>
          <input
            type="radio"
            value="optionTwo"
            onChange={() => setAnswer('optionTwo')}
            checked={answer === 'optionTwo'}
          />{' '}
          {question.optionTwo.text}
        </label>
        <br />
        <button disabled={answer === ''}>Submit</button>
      </form>
    </div>
  );
}

// class QuestionPage extends Component {
//   state = {
//     answer: '',
//   };

//   handleChange = (e) => {
//     const answer = e.target.value;
//     this.setState(() => ({
//       answer,
//     }));
//   };

//   render() {
//     const { authedUser, users, question } = this.props;
//   }

// function mapStateToProps({authedUser, users, questions}, props) {
//   const { id } = props.match.params;

//   return {
//     authedUser,
//     users,
//     question: questions[id]
//   }
// }

// export default connect(mapStateToProps)(QuestionPage);
