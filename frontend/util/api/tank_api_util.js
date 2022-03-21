export const createTank = tankData => {
  $.ajax({
    method: 'POST',
    url: '/api/tanks',
    data: { tankData }
  })
}