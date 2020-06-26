export const RECEIVE_USERS = 'RECEIVE_USERS';
export const CREATE_QUESTION = 'CREATE_QUESTION';
export const ADD_ANSWER = 'ADD_ANSWER';

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function createQuestion (user, id) {
  return {
    type: CREATE_QUESTION,
    user,
    id,
  }
}

export function addAnswer ({authedUser, qid, answer}) {
  return {
    type: ADD_ANSWER,
    authedUser,
    qid,
    answer,
  }
}