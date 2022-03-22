import { connect } from "react-redux";
import { removeSessionErrors, signup, login } from "../../actions/session_actions";
import SignupForm from './signup_form.jsx';

const mSTP = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
  };
};

const mDTP = (dispatch) => {
  return {
    signup: (user, history) => {
      dispatch(signup(user))
        .then(history.push('/home'))
        .catch(history.push('/signup'))
    },
    login: (user, history) => {
      dispatch(login(user))
        .then(history.push('/home'))
        .catch(history.push('/signup'))
    },
    receiveErrors: (errors) => {
      dispatch(receiveErrors(errors))
    },
    removeSessionErrors: () => {
      dispatch(removeSessionErrors())
    }
  };
};

export default connect(mSTP, mDTP)(SignupForm);