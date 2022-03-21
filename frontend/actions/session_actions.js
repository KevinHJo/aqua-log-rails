import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const REMOVE_SESSION_ERRORS = "REMOVE_SESSION_ERRORS";

const receiveCurrentUser = data => {
  return {
    type: RECEIVE_CURRENT_USER,
    data
  }
}

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  }
}

const receiveSessionErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
}

export const removeSessionErrors = () => {
  return {
    type: REMOVE_SESSION_ERRORS
  }
}

export const login = user => dispatch => {
  return SessionAPIUtil.login(user).then(user => {
    dispatch(receiveCurrentUser(user))
  }, err => (
    dispatch(receiveSessionErrors(err.responseJSON))
  ))
}

export const logout = () => dispatch => {
  return SessionAPIUtil.logout().then(user => (
    dispatch(logoutCurrentUser())
  ))
};

export const signup = user => dispatch => (
  SessionAPIUtil.signup(user).then(data => {
    dispatch(receiveCurrentUser(data))
  }, err => (
    dispatch(receiveSessionErrors(err.responseJSON))
  ))
);