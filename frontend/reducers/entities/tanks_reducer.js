import { RECEIVE_CURRENT_USER } from "../../actions/session_actions";
import { RECEIVE_TANK, RECEIVE_TANKS } from "../../actions/tank_actions";

const TanksReducer = (state = {}, action ) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState = {};
      action.data.tanks.forEach(tank => nextState[tank.id] = tank);
      return nextState;
    case RECEIVE_TANK:
      nextState[action.tank.id] = action.tank
      return nextState
    case RECEIVE_TANKS:
      nextState = {};
      action.tanks.forEach(tank => nextState[tank.id] = tank);
      return nextState;
    default:
      return state;
  }
}

export default TanksReducer