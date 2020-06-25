export const SET_AUTHED_USER = 'SET_AUTHED_USER';

/**
 * The same action is used for login and logut
 * 1) if a user logs out then id = null
 * 2) Otherwise id will be the id of authed user
 */
export function setAuthedUser (id='default') {
  return {
    type: SET_AUTHED_USER,
    id,
  }
}