import { createTank } from "../../actions/tank_actions";
import { connect } from 'react-redux';
import HomePage from './home_page';

const mSTP = state => {
  let loggedIn = false;
  if (state.entities.users[state.session.id]) {
    loggedIn = true
  }
  
  return {
    currentUser: state.entities.users[state.session.id],
    loggedIn: loggedIn,
    userTanks: Object.values(state.entities.tanks)
  }
}

const mDTP = dispatch => {
  return {
    // fetchUserTanks: userId => dispatch(fetchUserTanks(userId)),
    createTank: tank => dispatch(createTank(tank))
  }
}

export default connect(mSTP, mDTP)(HomePage)