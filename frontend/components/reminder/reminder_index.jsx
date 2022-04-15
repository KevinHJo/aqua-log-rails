import React from 'react';
import { useState, useEffect } from 'react';

const ReminderIndex = function(props) {
  const [firstReminder] = useState(props.reminders[0])

  useEffect(() => {
    props.fetchReminders(props.currentUser)
  }, [firstReminder])

  const [modal, setModal] = useState(false)
  const [values, setValues] = useState({
    body: '',
    freq: 1,
    end_date: '',
    start_date: '',
    owner_id: props.currentUser
  })

  const toggleModal = () => {
    setModal(!modal)
  }

  const handleChange = (field) => {
    return e => {setValues((values) => ({
      ...values,
      [field]: e.target.value
    }))}
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // debugger
    props.createReminder(values);

    setValues({
      body: '',
      freq: 1,
      end_date: '',
      start_date: '',
      owner_id: props.currentUser
    })
  }

  const renderCreateReminderForm = () => {
    if (modal) {
      return (
        <div id='reminder-form-container'>
          <form onSubmit={handleSubmit}>
            <label htmlFor='body'>Reminder:</label>
            <input id='reminder-form-body' type="text"
              name='body'
              value={values.body}
              onChange={handleChange('body')}
            />

            <label htmlFor='start-date'>Start Date:</label>
            <input id='reminder-form-start-date' type="datetime-local" 
              name='start-date'
              value={values.start_date}
              onChange={handleChange('start_date')}
            />

            <label htmlFor='end-date'>End Date:</label>
            <input id='reminder-form-end-date' type="datetime-local" 
              name='end-date'
              value={values.end_date}
              onChange={handleChange('end_date')}
            />

            <label htmlFor='freq'>Frequency:</label>
            <label>Daily
              <input type='radio' name='freq' value='1' onChange={handleChange('freq')}/>
            </label>
            <label>Weekly
              <input type='radio' name='freq' value='7' onChange={handleChange('freq')}/>
            </label>

            <input type="submit" value='Create Reminder'/>
          </form>
        </div>
      )
      
    } else {
      return null
    }
  }

  const testNotification = () => {
    if (Notification.permission != "granted") {
      Notification.requestPermission();
    } else {
      new Notification("testing", {
        body: "testing body",
        icon: 'https://raw.githubusercontent.com/KevinHJo/aqua-log-rails/main/app/assets/images/clownfish.png',
        dir: 'rtl'
      });
    }
  }

  return (
    <div id='reminders-home'>
      {renderCreateReminderForm()}

      <div id='reminder-list-container'>
        <ul>
          {props.reminders.map(reminder => {
            return (
              <li key={`reminder-${reminder.id}`}>{reminder.body}</li>
            )
          })}
        </ul>
      </div>

      <button onClick={toggleModal}>New Reminder</button>

      <button onClick={testNotification}>test notification</button>
    </div>
  )
}

export default ReminderIndex