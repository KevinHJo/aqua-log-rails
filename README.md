# AquaLog

[AquaLog](https://aqua-log-rails.herokuapp.com/#/) is a platform for freshwater and saltwater aquarium hobbyists and enthusists alike. Proper care of tanks involves the recording and monitoring of water parameters such as ammonia, nitrate, and nitrite levels. This app allows users to track these with the aid of visual graphical representations of paramters over time. They can also set up reminders for themselves in an interactive calendar. In addition, a welcoming community forum is available to all who have questions or just want to share their awesome creations!

## Table of Contents
+ [Technologies](#technologies)
+ [Features](#features)
  - [Parameter Logging](#parameter-logging)
  - [Community Forum](#community-forum)
  - [Scheduled Reminders](#scheduled-reminders)

## Technologies
+ AquaLog utilizes a Ruby on Rails backend to manage and access a postgresql database.
+ The frontend for AquaLog consists of JavaScript, using React and Redux libraries to provide a smooth and dynamic viewing experience for the user.
+ Logged parameters are displayed to the user through the use of the React Google Charts API.
+ **To be added:** AWS will be leveraged in order to allow users to include photos in their forum posts

## Features
### Parameter Logging
One of the major goals of this project was to create an easy-to-understand organizational tool for users to record water parameters for their tanks.

![Example](https://media.giphy.com/media/DgtlXJULXH9V9AS3LE/giphy.gif)

In order to accomplish this, I utilized jQuery AJAX requests along with a Redux store to connect the PostgreSQL database to the frontend and display data to the user. The graphical format of the displayed data is accomplished through the React Google Charts API.

```javascript
function LogIndex(props) {
  const [modal, setModal] = useState('ammonia')

  const selectedLogs = props.logs.filter(log => log.log_type === modal)
  
  let lineData;
  if (selectedLogs[0]) {
    lineData = selectedLogs.slice(-7).map(log => [moment(log.date).format('MM/DD/YY HH:MM A'), '',log.value])
    lineData.unshift(['x', {role: 'annotation', type: 'string'}, `${modal}`])
  } else {
    lineData = [
      ['x', 'Value'],
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
      [5, 0],
      [6, 0],
    ];
  }

  const lineChartOptions = {
    title: `${modal.toUpperCase()}`,
    titleFontSize: 25,
    legend: {position: 'none'},
    hAxis: {
      title: "Date",
      viewWindow: {
        min: lineData[1][0],
        max: lineData[lineData.length-1][0]
      }
    },
    vAxis: {
      title: 'Value'
    },
    annotations: {
      stem: {
        color: 'ECECEC'
      },
      style: 'line'
    },
    series: {
      1: {curveType: 'function'}
    }
  }

  return (
    <div id='log-index-container'>
      <div id='log-index-selectors'>
        <p className='log-index-selector' onClick={() => setModal('ammonia')}>Ammonia</p>
        <p className='log-index-selector' onClick={() => setModal('nitrite')}>Nitrite</p>
        <p className='log-index-selector' onClick={() => setModal('nitrate')}>Nitrate</p>
        <p className='log-index-selector' onClick={() => setModal('temperature')}>Temperature</p>
        <p className='log-index-selector' onClick={() => setModal('salinity')}>Salinity</p>
        <p className='log-index-selector' onClick={() => setModal('pH')}>pH</p>
        <p className='log-index-selector' onClick={() => setModal('calcium')}>Calcium</p>
        <p className='log-index-selector' onClick={() => setModal('alkalinity')}>Alkalinity</p>
        <p className='log-index-selector' onClick={() => setModal('phosphate')}>Phosphate</p>
      </div>

      <div id='log-chart-container'>
        <Chart
          width="100%"
          height="75%"
          chartType='LineChart'
          loader={<div>Loading Chart</div>}
          data={lineData}
          options={lineChartOptions}
        />
      </div>
    </div>
  )
}

export default LogIndex
```

### Community Forum
The social aspect of AquaLog is accomplished through a community forum. Original posts can be created by logged in users, and these are displayed on the forum home page. When a users clicks on an original post, they are able to see all comments and replies associated with it.

![image](https://raw.githubusercontent.com/KevinHJo/aqua-log-rails/main/public/aqualog-forum.PNG)

### Scheduled Reminders
Maintaining a healthy aquarium requires constant, structured upkeep. The "Reminders" tab allows users to view their scheduled notifications in a displayed calendar as well as add new ones. The calendar is built completely from scratch using React components and the Moment library. Desktop notifications are accomplished through the built in JavaScript Notifications API as well as ServiceWorkers.

```javascript
class Calendar extends React.Component {
.
.
.
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
      const date = new Date(reminder.start_date)
      if (date.getMonth() === monthIdx && date.getFullYear() === selectedYear) {
        if (reminders[date.getDate()]) {
          reminders[date.getDate()].push(<li key={`reminder-${reminder.id}`} className='calendar-reminder' onClick={e => this.toggleReminderShow(e, reminder)}>{reminder.title}</li>)
        } else {
          reminders[date.getDate()] = [<li key={`reminder-${reminder.id}`} className='calendar-reminder' onClick={e => this.toggleReminderShow(e, reminder)}>{reminder.title}</li>]
        }
      }
    });

    //Fills the calendar with real slots until the end of the month
    let daysInMonth = [];
    for (let i=1; i <= this.state.dateObject.daysInMonth(); i++) {
      let today = ((i === this.currentDay()) && (this.state.currentDate.month() === monthIdx) && (this.state.currentDate.year() === year)) ? 'today' : '';
      daysInMonth.push(
        <td key={`day-${i}`} className={`calendar-day-${today}`} onClick={this.props.toggleModal}>
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
      return <tr key={`calendar-row-${i+1}`}>{d}</tr>
    });

    return days;
    .
    .
    .
  }
