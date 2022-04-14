import { connect } from "react-redux";
import { fetchReminders, createReminder } from "../../actions/reminder_actions";
import ReminderIndex from "./reminder_index";

const mSTP = (state) => {
  return {
    reminders: Object.values(state.entities.reminders),
    currentUser: state.session.id
  }
}

const mDTP = dispatch => {
  return {
    fetchReminders: reminders => dispatch(fetchReminders(reminders)),
    createReminder: reminder => dispatch(createReminder(reminder))
  }
}

export default connect(mSTP, mDTP)(ReminderIndex)