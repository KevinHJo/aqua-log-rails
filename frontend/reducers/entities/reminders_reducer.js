import { RECEIVE_REMINDER, RECEIVE_REMINDERS } from "../../actions/reminder_actions";
import { RECEIVE_CURRENT_USER } from '../../actions/session_actions'
import { RECEIVE_TANKS } from "../../actions/tank_actions";

const RemindersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_REMINDER:
      nextState[action.reminder.id] = action.reminder;
      return nextState;
    case RECEIVE_REMINDERS:
      nextState = {}
      action.reminders.forEach(reminder => nextState[reminder.id] = reminder)
      return nextState;
    case RECEIVE_CURRENT_USER:
      nextState = {}
      action.data.reminders.forEach(reminder => nextState[reminder.id] = reminder)
      return nextState;
    case RECEIVE_TANKS:
      nextState = {}
      action.data.reminders.forEach(reminder => nextState[reminder.id] = reminder)
      return nextState;
    default:
      return state;
  }
}

export default RemindersReducer;