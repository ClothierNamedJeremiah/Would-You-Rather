import { 
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from '../utils/api'

import { receiveQuestions, addQuestion, addVote } from './questions'
import { receiveUsers, createQuestion, addAnswer } from './users'

export function handleInitalData () {
  return (dispatch) => {
    return Promise.all([
      _getUsers(),
      _getQuestions()
    ]).then(data => {
      const [ users, questions ] = data;
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  }
}

export function handleAddQuestion (question) {
  return (dispatch) => {
    return _saveQuestion(question)
      .then(question => {
        dispatch(addQuestion(question));
        dispatch(createQuestion(question.author, question.id));
      });
  }
}

export function handleAddVote (vote) {
  return (dispatch) => {
    return _saveQuestionAnswer(vote)
      .then(() => {
        dispatch(addVote(vote));
        dispatch(addAnswer(vote));
      })
  }
}