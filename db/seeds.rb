# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Tank.destroy_all
Log.destroy_all

# Seed users
puts("Creating users")
demo_user = User.create({username: "demo", email: "demo@email.com", password: "password"})
puts("Done! :)")
puts("----------------------------------------")

# Seed tanks
puts("Creating tanks")
tank1 = Tank.create({name: "Waterbox P25", owner_id: demo_user.id})
puts("Done! :)")
puts("----------------------------------------")

# Seed logs
puts("Creating logs")
log1 = Log.create({log_type: "ammonia", value: 2.5, user_id: demo_user.id, tank_id: tank1.id, date: "2022-03-15 10:00:00 UTC"})
log2 = Log.create({log_type: "ammonia", value: 2.0, user_id: demo_user.id, tank_id: tank1.id, date: "2022-03-16 10:00:00 UTC"})
log3 = Log.create({log_type: "ammonia", value: 1.5, user_id: demo_user.id, tank_id: tank1.id, date: "2022-03-17 10:00:00 UTC"})
log4 = Log.create({log_type: "ammonia", value: 1.0, user_id: demo_user.id, tank_id: tank1.id, date: "2022-03-18 10:00:00 UTC"})
log5 = Log.create({log_type: "ammonia", value: 0.5, user_id: demo_user.id, tank_id: tank1.id, date: "2022-03-19 10:00:00 UTC"})
log6 = Log.create({log_type: "ammonia", value: 0.2, user_id: demo_user.id, tank_id: tank1.id, date: "2022-03-20 10:00:00 UTC"})
puts("Done! :)")
puts("----------------------------------------")