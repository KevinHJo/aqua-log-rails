import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";

import NavBar from './navbar';

const mSTP = state => ({
  loggedIn: Boolean(state.session.id)
});

export default connect(mSTP, { logout })(NavBar);