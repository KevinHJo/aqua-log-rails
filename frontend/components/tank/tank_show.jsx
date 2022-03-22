import React from 'react';
import LogIndex from '../log/log_index';
import moment from 'moment';

class TankShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      log_type: '',
      value: '',
      tank_id: this.props.tankId,
      user_id: this.props.currentUser.id,
      date: new Date().toISOString().slice(0, 10),
      modal: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderTank = this.renderTank.bind(this);
    // this.sendToLog = this.sendToLog.bind(this);
    this.toggleCreateLogForm = this.toggleCreateLogForm.bind(this)
  }

  componentDidMount() {
    if (!this.props.tank) {
      this.props.fetchTank(this.props.tankId)
    }

    this.props.fetchTankLogs(this.props.tankId)
  }

  handleSubmit() {
    this.props.createLog({
      log_type: this.state.log_type,
      value: this.state.value,
      tank_id: this.state.tank_id,
      user_id: this.state.user_id,
      date: new Date(this.state.date),
    });

    this.setState({
      log_type: '',
      value: '',
      tank_id: this.props.tankId,
      user_id: this.props.currentUser.id,
      date: new Date().toISOString().slice(0, 10),
      modal: false
    })
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value})
    }
  }

  // sendToLog(logId) {
  //   this.props.history.push(`/logs/${logId}`);
  // }

  toggleCreateLogForm() {
    this.setState({modal: !this.state.modal})
  }

  renderCreateLogForm() {
    if (this.state.modal) {
      return (
        <div id='create-log-form-container' onClick={() => this.toggleCreateLogForm()}>
          <form id='create-log-form' onSubmit={this.handleSubmit} onClick={(e) => e.stopPropagation()}>
            <label htmlFor='logType'>Log Type: </label>
            <select name='logType' onChange={this.update('log_type')} defaultValue="">
              <option className='disabled-option' value="" disabled>Select a Parameter</option>
              <option value="temperature">Temperature</option>
              <option value="ammonia">Ammonia</option>
              <option value="nitrite">Nitrite</option>
              <option value="nitrate">Nitrate</option>
              <option value="pH">pH</option>
              <option value="salinity">Salinity</option>
              <option value="alkalinity">Alkalinity</option>
              <option value="phosphate">Phosphate</option>
              <option value="calcium">Calcium</option>
              <option value="magnesium">Magnesium</option>
              <option value="iodine">Iodine</option>
              <option value="strontium">Strontium</option>
            </select>

            <label htmlFor='value'>Value: </label>
            <input type="number"
              name='value'
              step='any'
              value={this.state.value}
              min='0'
              max='200'
              placeholder='Input a value'
              onChange={this.update('value')}
            />

            <label htmlFor='date'>Date: </label>
            <input type="datetime-local" 
              name='date'
              value={this.state.date}
              onChange={this.update('date')}
            />

            <input type="submit" value='Create Log'/>
          </form>
        </div>
      )
    } else {
      return null
    }
  }
  
  renderTank() {
    if (this.props.tank && this.props.logs) {
      const dateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }

      const timeOptions = {
        hour: '2-digit',
        minute: '2-digit'
      }

      return (
        <div id='tank-show-page'>
          {this.renderCreateLogForm()}

          <div id='tank-log-list-container'>
            <ul id='tank-log-list'>
              <h2>All Logs</h2>
              {this.props.logs.map( log => {
                return (
                  <li key={`log-${log.id}`} className='tank-log-list-item'>
                    <p>{log.log_type[0].toUpperCase() + log.log_type.slice(1)} - {moment(log.date).format('MM/DD/YY HH:MM A')}</p>
                  </li>
                )
              })}
            </ul>
            <button onClick={this.toggleCreateLogForm}>Create New Log</button>
          </div>
          
          <LogIndex logs={this.props.logs} toggleCreateLogForm={this.toggleCreateLogForm.bind(this)}/>
        </div>
      )
    } else {
      return null
    }
  }

  render() {
    let tankName
    if (this.props.tank) {
      tankName = this.props.tank.name
    }
    return (
      <div id='tank-show-page-container'>
        <h1 id='tank-show-name'>{tankName}</h1>
        {this.renderTank()}
      </div>
    )
  }
}

export default TankShow;