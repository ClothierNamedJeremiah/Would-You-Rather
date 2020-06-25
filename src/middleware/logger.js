/**
 * 1) The variable logger is assigned to a function that takes the store as its argument.
 * 2) That function returns another function, which is passed next (which could be middleware in line or
 * the dispatch function).
 * 3) That other functioin returns another function which is apssed an action
 * 4) Once inside that third function, we have access to store, next, and actions
 * 
 * It is important to note that the value of the next parameter will be determined by the applyMiddleware
 * function in ./index.js
 * 
 * All middleware will be called in the order it is listed in that function. In our case,
 * the next will be dispatch because logger is the last middleware listed in that function
 */

const logger = (store) => (next) => (action) => {
  console.group(action.type);
    console.log('The action', action);
    const returnValue = next(action) // this will update the state
    console.log('The new state: ', store.getState());
  console.groupEnd();
  return returnValue;
}

export default logger;