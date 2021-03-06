import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, REMOVE_SESSION_ERRORS } from "../../actions/session_actions";

const SessionErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    case REMOVE_SESSION_ERRORS:
      return [];
    default:
      return state;
  }
}

export default SessionErrorsReducer