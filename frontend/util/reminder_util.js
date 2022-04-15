export const scheduleReminderNotifications = async (reminders) => {
  const reg = await navigator.serviceWorker.getRegistration();
  if (Notification.permission != "granted") {
    Notification.requestPermission().then(permission => console.log(permission));
  } else {
    reminders.forEach(reminder => {
      let date = new Date(reminder.start_date)
      if (reminder.freq) {
        while (date < new Date(reminder.end_date)) {
          reg.showNotification(reminder.title, {
            tag: `reminder-${reminder.id}`,
            body: reminder.body,
            showTrigger: new TimestampTrigger(date),
            badge: 'https://raw.githubusercontent.com/KevinHJo/aqua-log-rails/main/app/assets/images/clownfish.png',
            icon: 'https://raw.githubusercontent.com/KevinHJo/aqua-log-rails/main/app/assets/images/clownfish.png'
          })

          date.setDate(date.getDate() + reminder.freq)
        }
      } else {
        reg.showNotification(reminder.title, {
          tag: `reminder-${reminder.id}`,
          body: reminder.body,
          showTrigger: new TimestampTrigger(date),
          badge: 'https://raw.githubusercontent.com/KevinHJo/aqua-log-rails/main/app/assets/images/clownfish.png',
          icon: 'https://raw.githubusercontent.com/KevinHJo/aqua-log-rails/main/app/assets/images/clownfish.png'
        })
      }
    })
  };
}