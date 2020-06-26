import { RECEIVE_USERS, CREATE_QUESTION, ADD_ANSWER } from '../actions/users'

export function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case CREATE_QUESTION:
      return {
        ...state,
        [action.user]: {
          ...state[action.user],
          questions: state[action.user].questions.concat(action.id)
        }
      }
    case ADD_ANSWER:
      console.log(action.authedUser);
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer,
          }
        }
      }
    default:
      return state;
  }
}