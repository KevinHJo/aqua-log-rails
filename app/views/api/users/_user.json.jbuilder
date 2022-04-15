json.user do
  json.extract! user, :id, :username, :email, :session_token, :password_digest
end

json.tanks do
  json.array! user.tanks
end

json.reminders do
  json.array! user.reminders
end