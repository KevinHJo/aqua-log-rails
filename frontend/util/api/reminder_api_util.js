export const fetchReminders = (userId) => {
  return $.ajax({
    method: "GET",
    url: "api/reminders",
    data: { user_id: userId }
  })
}

export const createReminder = reminder => {
  return $.ajax({
    method: "POST",
    url: "api/reminders",
    data: { reminder }
  })
}