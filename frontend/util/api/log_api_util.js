export const fetchTankLogs = tankId => {
  return $.ajax({
    method: 'GET',
    url: 'api/logs',
    data: { tank_id: tankId }
  })
}

export const createLog = log => {
  return $.ajax({
    method: 'POST',
    url: 'api/logs',
    data: { log }
  })
}