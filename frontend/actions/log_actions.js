import * as LogAPIUtil from '../util/api/log_api_util'

export const RECEIVE_LOGS = "RECEIVE_LOGS";
export const RECEIVE_LOG = "RECEIVE_LOG";
export const RECEIVE_LOG_ERRORS = "RECEIVE_LOG_ERRORS";

// ACTION CREATORS
const receiveLogs = logs => {
  return {
    type: RECEIVE_LOGS,
    logs
  }
}

const receiveLog = log => {
  return {
    type: RECEIVE_LOG,
    log
  }
}

const receiveLogErrors = err => {
  return {
    type: RECEIVE_LOG_ERRORS,
    err
  }
}

//THUNK ACTION CREATORS
export const fetchTankLogs = tankId => dispatch => {
  return LogAPIUtil.fetchTankLogs(tankId).then(logs => {
    dispatch(receiveLogs(logs))
  })
}

export const createLog = log => dispatch => {
  return LogAPIUtil.createLog(log).then(log => {
    dispatch(receiveLog(log))
  }, err => {
    dispatch(receiveLogErrors(err.responseJSON))
  })
}