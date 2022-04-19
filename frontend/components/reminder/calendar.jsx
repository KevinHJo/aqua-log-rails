import React from 'react'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

class Calendar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dateObject: moment(),
      currentDate: moment(),
      months: moment.months(),
      showCalendar: true,
      showMonthTable: false,
      showYearTable: false,
      showReminder: false,
      showReminderForm: false,
      selectedDate: moment(),
      selectedReminder: null
    }

    this.createYearList = this.createYearList.bind(this);
    this.renderReminder = this.renderReminder.bind(this);
    this.selectDay = this.selectDay.bind(this);
    this.toggleReminderShow = this.toggleReminderShow.bind(this);
  };

  firstDayOfMonth() {
    const dateObject = this.state.dateObject;
    const firstDay = moment(dateObject).startOf("month").format("d");
    return firstDay;
  };

  currentDay() {
    return parseInt(this.state.currentDate.format('D'));
  }

  displayCurrentYear() {
    return this.state.dateObject.format("Y");
  }

  createYearList() {
    let years = [];
    for (let i=-10; i<=10; i++) {
      const currentYear = moment();
      years.push(currentYear.add(i, 'year').format('YYYY'))
    }

    years = years.map(year => {
      return (
        <td
          key={year}
          className='calendar-year'
          onClick={() => {
            this.setYear(year);
          }}
        >
          <span>{year}</span>
        </td>
      )
    });

    let rows = [];
    let cells = [];
    years.forEach((year, i) => {
      if (i % 7 !== 0 || i === 0) {
        cells.push(year);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(year);
      }
    });

    rows.push(cells);
    return rows.map((d,i) => {
      return <tr key={i+31}>{d}</tr>
    })
  }

  createMonthList() {
    const months = this.state.months.map(month => {
      return (
        <td
          key={month}
          className='calendar-month'
          onClick={e => this.setMonth(month)}
        >
          <span>{month}</span>
        </td>
      )
    });

    let rows = [];
    let cells = [];
    months.forEach((month, i) => {
      if (i % 3 !== 0 || i === 0) {
        cells.push(month);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(month);
      }
    });

    rows.push(cells);
    return rows.map((d,i) => {
      return <tr key={i+31}>{d}</tr>
    })
  };
  
  createWeekdayList() {
    return moment.weekdaysShort().map(day => {
      return (
        <th key={day} className='week-day'>
          {day}
        </th>
      );
    });
  }

  selectDay(e, i) {
    const selectedDate = this.state.dateObject;
    selectedDate.set('date', i)
    this.setState({selectedDate, showReminderForm: !this.state.showReminderForm})
  }

  toggleReminderShow(e, reminder) {
    // this.setState({
    //   showReminder: !this.state.showReminder, 
    //   showReminderForm: false, 
    //   selectedReminder: reminder
    // })
  }

  createDaysInMonth() {
    //Fills the first week with blank slots until the first day of the month
    let blanks = [];
    for (let i=0; i < this.firstDayOfMonth(); i++) {
      blanks.push(
        <td className='calendar-day empty'>{''}</td>
      );
    };

    const reminders = {};
    const year = this.state.dateObject.year();
    const monthIdx = this.state.dateObject.month();
    const selectedYear = parseInt(this.state.dateObject.format("Y"))

    this.props.reminders.forEach(reminder => {
      // debugger
      const date = new Date(reminder.start_date)
      if (date.getMonth() === monthIdx && date.getFullYear() === selectedYear) {
        if (reminders[date.getDate()]) {
          reminders[date.getDate()].push(<li key={reminder.id} className='calendar-reminder' onClick={e => this.toggleReminderShow(e, reminder)}>{reminder.title}</li>)
        } else {
          reminders[date.getDate()] = [<li key={reminder.id} className='calendar-reminder' onClick={e => this.toggleReminderShow(e, reminder)}>{reminder.title}</li>]
        }
      }
    });

    //Fills the calendar with real slots until the end of the month
    let daysInMonth = [];
    for (let i=1; i <= this.state.dateObject.daysInMonth(); i++) {
      let today = ((i === this.currentDay()) && (this.state.currentDate.month() === monthIdx) && (this.state.currentDate.year() === year)) ? 'today' : '';
      daysInMonth.push(
        <td key={i} className={`calendar-day ${today}`} onClick={e => this.selectDay(e, i)}>
          <h4>{i}</h4>
          {reminders[i]}
        </td>
      );
    };

    //Combines blank slots with filled slots
    const totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    //Refactors array into rows of 7 days
    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        rows.push(cells);
      }
    });

    //Wraps each inner array in a <tr> tag
    let days = rows.map((d, i) => {
      return <tr key={i+1}>{d}</tr>
    });

    return days;
  }

  setYear(year) {
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set('year', year);
    this.setState({
      dateObject: dateObject,
      showYearTable: false,
      showCalendar: true,
      showMonthTable: false
    });
  };

  setMonth(month) {
    const monthIdx = this.state.months.indexOf(month);
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set('month', monthIdx);
    this.setState({
      dateObject: dateObject,
      showYearTable: false,
      showCalendar: true,
      showMonthTable: false
    });
  };

  toggleMonthTable() {
    this.setState({
      showMonthTable: !this.state.showMonthTable,
      showYearTable: false
    });
  };

  toggleYearTable() {
    this.setState({
      showYearTable: !this.state.showYearTable,
      showMonthTable: false
    });
  };

  onPrev() {
    let curr = '';
    if (this.state.showYearTable) {
      curr = 'year';
    } else {
      curr = 'month';
    }
    this.setState({
      dateObject: this.state.dateObject.subtract(1, curr),
      showCalendar: true,
      showMonthTable: false,
      showYearTable: false
    });
  };

  onNext() {
    let curr = '';
    if (this.state.showYearTable) {
      curr = 'year';
    } else {
      curr = 'month';
    }
    this.setState({
      dateObject: this.state.dateObject.add(1, curr),
      showCalendar: true,
      showMonthTable: false,
      showYearTable: false
    });
  }

  pickRender() {
    if (this.state.showMonthTable) {
      return (
        <table className='calendar-months'>
          <thead>
            <tr key={-2}>
              <th colSpan='4'>Select a Month</th>
            </tr>
          </thead>
          <tbody>{this.createMonthList()}</tbody>
        </table>
      )
    } else if (this.state.showYearTable) {
      return (
        <table className='calendar-years'>
          <thead>
            <tr key={-3}>
              <th colSpan='7'>Select a Year</th>
            </tr>
          </thead>
          <tbody>{this.createYearList()}</tbody>
        </table>
      )
    } else if(this.state.showCalendar) {
      return (
        <table className='calendar-days'>
          <thead>
            <tr key={-1}>{this.createWeekdayList()}</tr>
          </thead>
          <tbody>
            {this.createDaysInMonth()}
          </tbody>
        </table>
      )
    }
  }

  toggleReminderForm() {
    this.setState({showReminderForm: !this.state.showReminderForm})
  }

  renderReminder() {
    // if (this.state.showReminder) {
    //   return <ReminderShow date={this.state.selectedDate} reminder={this.state.selectedReminder} toggleReminderShow={this.toggleReminderShow} deleteReminder={this.props.deleteReminder} updateReminder={this.props.updateReminder}/>
    // }
    // else if (this.state.showReminderForm) {
    //   return <ReminderForm date={this.state.selectedDate} createReminder={this.props.createReminder} toggleReminderForm={this.toggleReminderForm.bind(this)}/>
    // }
  }

  render() {
    return (
      <div id='calendar-container'>
        {this.renderReminder()}
        <div className='reminder-calendar'>
          <div id='calendar-header'>
            <div className='calendar-nav' >
              <div id='calendar-nav-left' onClick={this.onPrev.bind(this)}>
                {/* <i className="fas fa-caret-left"></i> */}
                <FontAwesomeIcon icon={faAngleLeft} />
              </div>
              <div className='calendar-month' onClick={this.toggleMonthTable.bind(this)}>
                {this.state.dateObject.format('MMMM')}
              </div>
              <div className='calendar-year' onClick={this.toggleYearTable.bind(this)}>
                {this.displayCurrentYear()}
              </div>
              <div id='calendar-nav-right' onClick={this.onNext.bind(this)}>
                {/* <i className="fas fa-caret-right"></i> */}
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </div>
          </div>
          

          {this.pickRender()}        
        </div>
      </div>
        
    )
  };
};

export default Calendar;