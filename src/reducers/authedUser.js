import { SET_AUTHED_USER } from '../actions/authedUser'

export function authedUser (state = null, action) {
  switch(action.type) {
    case SET_AUTHED_USER:
      return action.id === 'Select a User' 
        ? null 
        : action.id;
    default:
      return state;
  }
}