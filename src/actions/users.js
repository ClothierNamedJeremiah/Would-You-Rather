export const RECEIVE_USERS = 'RECEIVE_USERS';
export const CREATE_QUESTION = 'CREATE_QUESTION';

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