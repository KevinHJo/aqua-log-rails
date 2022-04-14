import * as ReminderAPIUtil from '../util/api/reminder_api_util';

export const RECEIVE_REMINDERS = 'RECEIVE_REMINDERS';
export const RECEIVE_REMINDER = 'RECEIVE_REMINDER';


//ACTION CREATORS
const receiveReminders = reminders => {
  return {
    type: RECEIVE_REMINDERS,
    reminders
  }
}

const receiveReminder = reminder => {
  return {
    type: RECEIVE_REMINDER,
    reminder
  }
}

const receiveReminderErrors = err => {
  return {
    type: RECEIVE_REMINDER_ERRORS,
    err
  }
}

//THUNK ACTION CREATORS
export const fetchReminders = userId => dispatch => {
  return ReminderAPIUtil.fetchReminders(userId).then(reminders => {
    dispatch(receiveReminders(reminders))
  })
}

export const createReminder = reminder => dispatch => {
  return ReminderAPIUtil.createReminder(reminder).then(reminder => {
    dispatch(receiveReminder(reminder))
  }, err => {
    dispatch(receiveReminderErrors(err.responseJSON))
  })
}