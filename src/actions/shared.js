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