import React from 'react';
import { useState, useEffect } from 'react';
import Calendar from './calendar';

const ReminderIndex = function(props) {
  const [firstReminder] = useState(props.reminders[0])

  useEffect(() => {
    props.fetchReminders(props.currentUser)
  }, [firstReminder])

  const [modal, setModal] = useState(false)
  const [values, setValues] = useState({
    title: '',
    body: '',
    freq: 1,
    end_date: '',
    start_date: '',
    owner_id: props.currentUser
  })

  const toggleModal = () => {
    setModal(!modal)
  }

  const ensureOpenModal = (e) => {
    e.stopPropagation();
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
      title: '',
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
        <div id='reminder-form-container' onClick={toggleModal}>
          <form id='create-reminder-form' onSubmit={handleSubmit} onClick={ensureOpenModal}>
            <h3>Set a Reminder</h3>

            <div className='reminder-form-input'>
              <label htmlFor='title'>Reminder:</label>
              <input id='reminder-form-title' type='text'
                name='title'
                value={values.title}
                onChange={handleChange('title')}
              />
            </div>
            
            <div className='reminder-form-input'>
              <label htmlFor='body'>Body:</label>
              <input id='reminder-form-body' type="text"
                name='body'
                value={values.body}
                onChange={handleChange('body')}
              />
            </div>

            <div className='reminder-form-input'>
              <label htmlFor='start-date'>Start Date:</label>
              <input id='reminder-form-start-date' type="datetime-local" 
                name='start-date'
                value={values.start_date}
                onChange={handleChange('start_date')}
              />
            </div>

            <div className='reminder-form-input'>
              <label htmlFor='end-date'>End Date:</label>
              <input id='reminder-form-end-date' type="datetime-local" 
                name='end-date'
                value={values.end_date}
                onChange={handleChange('end_date')}
              />
            </div>

            <div className='reminder-form-input'>
              <label htmlFor='freq'>Frequency:</label>
              <label>Once
                <input type='radio' name='freq' value='0' onChange={handleChange('freq')}/>
              </label>
              <label>Daily
                <input type='radio' name='freq' value='1' onChange={handleChange('freq')}/>
              </label>
              <label>Weekly
                <input type='radio' name='freq' value='7' onChange={handleChange('freq')}/>
              </label>
            </div>

            <input id='reminder-form-submit' type="submit" value='Create Reminder'/>
          </form>
        </div>
      )
      
    } else {
      return null
    }
  }

  // const testNotification = async () => {
  //   const reg = await navigator.serviceWorker.getRegistration();
  //   if (Notification.permission != "granted") {
  //     Notification.requestPermission().then(permission => console.log(permission));
  //   } else {
  //     reg.showNotification('Testing', {
  //       tag: 'aslkdfjal;skj',
  //       body: 'Testing body',
  //       showTrigger: new TimestampTrigger(new Date().getTime() + 1 * 1000),
  //       badge: 'https://raw.githubusercontent.com/KevinHJo/aqua-log-rails/main/app/assets/images/clownfish.png',
  //       icon: 'https://raw.githubusercontent.com/KevinHJo/aqua-log-rails/main/app/assets/images/clownfish.png'
  //     })

  //     reg.showNotification('Testing2', {
  //       tag: 'idklfhalkdgjah',
  //       body: 'Testing body',
  //       showTrigger: new TimestampTrigger(new Date().getTime() + 5 * 1000),
  //       badge: 'https://raw.githubusercontent.com/KevinHJo/aqua-log-rails/main/app/assets/images/clownfish.png',
  //       icon: 'https://raw.githubusercontent.com/KevinHJo/aqua-log-rails/main/app/assets/images/clownfish.png'
  //     })
  //   };
  // }

  return (
    <div id='reminders-home'>
      {renderCreateReminderForm()}

      <div id='reminder-list-container'>
        <h3>Your Reminders</h3>
        <ul>
          {props.reminders.map(reminder => {
            return (
              <li key={`reminder-${reminder.id}`}>{reminder.title}</li>
            )
          })}
        </ul>
        
        <button onClick={toggleModal}>New Reminder</button>
        {/* <button onClick={testNotification}>test notification</button> */}
      </div>

      <Calendar reminders={props.reminders} toggleModal={toggleModal}/>

      
    </div>
  )
}

export default ReminderIndex