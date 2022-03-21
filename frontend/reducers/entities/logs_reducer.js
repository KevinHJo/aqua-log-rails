import { RECEIVE_LOG, RECEIVE_LOGS } from "../../actions/log_actions";

const LogsReducer = (state = {}, action ) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  debugger
  switch (action.type) {
    case RECEIVE_LOG:
      nextState[action.log.id] = action.log
      return nextState
    case RECEIVE_LOGS:
      nextState = {};
      action.logs.forEach(log => nextState[log.id] = log);
      return nextState;
    default:
      return state;
  }
}

export default LogsReducer