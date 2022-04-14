import { RECEIVE_REMINDER, RECEIVE_REMINDERS } from "../../actions/reminder_actions";

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
    default:
      return state;
  }
}

export default RemindersReducer;