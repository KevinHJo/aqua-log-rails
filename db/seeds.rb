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
tank2 = Tank.create({name: "Red Sea REEFER 170", owner_id: demo_user.id})
puts("Done! :)")
puts("----------------------------------------")

# Seed logs
puts("Creating logs")
ammonia1 = Log.create({log_type: "ammonia", value: 2.5, user_id: demo_user.id, tank_id: tank1.id, date: "2022-03-15 10:00:00 UTC"})
ammonia2 = Log.create({log_type: "ammonia", value: 2.0, user_id: demo_user.id, tank_id: tank1.id, date: "2022-03-16 10:00:00 UTC"})
ammonia3 = Log.create({log_type: "ammonia", value: 1.5, user_id: demo_user.id, tank_id: tank1.id, date: "2022-03-17 10:00:00 UTC"})
ammonia4 = Log.create({log_type: "ammonia", value: 1.0, user_id: demo_user.id, tank_id: tank1.id, date: "2022-03-18 10:00:00 UTC"})
ammonia5 = Log.create({log_type: "ammonia", value: 0.5, user_id: demo_user.id, tank_id: tank1.id, date: "2022-03-19 10:00:00 UTC"})
ammonia6 = Log.create({log_type: "ammonia", value: 0.2, user_id: demo_user.id, tank_id: tank1.id, date: "2022-03-20 10:00:00 UTC"})
ammonia7 = Log.create({log_type: "ammonia", value: 0.1, user_id: demo_user.id, tank_id: tank1.id, date: "2022-03-21 10:00:00 UTC"})

nitrite1 = Log.create({log_type: "nitrite", value: 0.0, user_id: demo_user.id, tank_id: tank1.id, date: "2022-03-15 10:00:00 UTC"})
nitrite2 = Log.create({log_type: "nitrite", value: 0.5, user_id: demo_user.id, tank_id: tank1.id, date: "2022-03-16 10:00:00 UTC"})
nitrite3 = Log.create({log_type: "nitrite", value: 1.0, user_id: demo_user.id, tank_id: tank1.id, date: "2022-03-17 10:00:00 UTC"})
nitrite4 = Log.create({log_type: "nitrite", value: 1.5, user_id: demo_user.id, tank_id: tank1.id, date: "2022-03-18 10:00:00 UTC"})
nitrite5 = Log.create({log_type: "nitrite", value: 2.0, user_id: demo_user.id, tank_id: tank1.id, date: "2022-03-19 10:00:00 UTC"})
nitrite6 = Log.create({log_type: "nitrite", value: 2.3, user_id: demo_user.id, tank_id: tank1.id, date: "2022-03-20 10:00:00 UTC"})
nitrite7 = Log.create({log_type: "nitrite", value: 2.4, user_id: demo_user.id, tank_id: tank1.id, date: "2022-03-21 10:00:00 UTC"})

nitrate1 = Log.create({log_type: "nitrate", value: 0.0, user_id: demo_user.id, tank_id: tank1.id, date: "2022-03-15 10:00:00 UTC"})
nitrate2 = Log.create({log_type: "nitrate", value: 0.0, user_id: demo_user.id, tank_id: tank1.id, date: "2022-03-16 10:00:00 UTC"})
nitrate3 = Log.create({log_type: "nitrate", value: 0.0, user_id: demo_user.id, tank_id: tank1.id, date: "2022-03-17 10:00:00 UTC"})
nitrate4 = Log.create({log_type: "nitrate", value: 0.0, user_id: demo_user.id, tank_id: tank1.id, date: "2022-03-18 10:00:00 UTC"})
nitrate5 = Log.create({log_type: "nitrate", value: 0.0, user_id: demo_user.id, tank_id: tank1.id, date: "2022-03-19 10:00:00 UTC"})
nitrate6 = Log.create({log_type: "nitrate", value: 0.0, user_id: demo_user.id, tank_id: tank1.id, date: "2022-03-20 10:00:00 UTC"})
nitrate7 = Log.create({log_type: "nitrate", value: 0.0, user_id: demo_user.id, tank_id: tank1.id, date: "2022-03-21 10:00:00 UTC"})
puts("Done! :)")
puts("----------------------------------------")