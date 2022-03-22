import React, { useState } from 'react';
import Chart from 'react-google-charts';
import moment from 'moment';

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