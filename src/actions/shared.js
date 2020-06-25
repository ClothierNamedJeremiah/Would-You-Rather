import { _getUsers, _getQuestions } from '../utils/api'

import { receiveQuestions } from './questions'
import { receiveUsers } from './users'

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

// TODO: Add function for addQuestion because the question itself will be appended to questions and
// the question id will be appened to the user's data