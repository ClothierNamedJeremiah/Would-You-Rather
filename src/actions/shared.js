import { _getUsers, _getQuestions, _saveQuestion} from '../utils/api'

import { receiveQuestions, addQuestion } from './questions'
import { receiveUsers, createQuestion } from './users'

//
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