import { RECEIVE_USERS, CREATE_QUESTION } from '../actions/users'

export function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case CREATE_QUESTION:
      // given a user and id question, we want to append the id to the user who created it
      console.log(state[action.user].questions.concat(action.id));
      return {
        ...state,
        [action.user]: {
          ...state[action.user],
          questions: state[action.user].questions.concat(action.id)
        }
      }
    default:
      return state;
  }
}