import { createTank, fetchUserTanks } from "../../actions/tank_actions";
import { fetchReminders } from "../../actions/reminder_actions";
import { connect } from 'react-redux';
import HomePage from './home_page';

const mSTP = state => {
  let loggedIn = false;
  if (state.entities.users[state.session.id]) {
    loggedIn = true
  }
  
  return {
    currentUser: state.entities.users[state.session.id],
    reminders: Object.values(state.entities.reminders),
    loggedIn: loggedIn,
    userTanks: Object.values(state.entities.tanks)
  }
}

const mDTP = dispatch => {
  return {
    fetchUserTanks: userId => dispatch(fetchUserTanks(userId)),
    fetchReminders: reminders => dispatch(fetchReminders(reminders)),
    createTank: tank => dispatch(createTank(tank))
  }
}

export default connect(mSTP, mDTP)(HomePage)