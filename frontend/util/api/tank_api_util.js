export const createTank = tank => {
  return $.ajax({
    method: 'POST',
    url: '/api/tanks',
    data: { tank }
  })
}

export const fetchTank = tankId => {
  return $.ajax({
    method: 'GET',
    url: `api/tanks/${tankId}`
  })
}

export const fetchUserTanks = userId => {
  return $.ajax({
    method: 'GET',
    url: '/api/tanks',
    data: { user_id: userId }
  })
}