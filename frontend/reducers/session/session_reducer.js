import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../../actions/session_actions";

const SessionReducer = (state = {id: null, isAuthenticated: false}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState['id'] = action.user.id;
      nextState.isAuthenticated = true
      return nextState;
    case LOGOUT_CURRENT_USER:
      nextState['id'] = null;
      return nextState;
    default:
      return state;
  }
}

export default SessionReducer;