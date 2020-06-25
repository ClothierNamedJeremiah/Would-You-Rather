import { RECEIVE_QUESTIONS, ADD_QUESTION } from '../actions/questions'

export function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION:
      console.log(state);
    default:
      return state;
  }
}