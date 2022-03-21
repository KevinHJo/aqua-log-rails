# == Schema Information
#
# Table name: logs
#
#  id         :bigint           not null, primary key
#  date       :datetime         not null
#  log_type   :string           not null
#  value      :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  tank_id    :integer          not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_logs_on_tank_id  (tank_id)
#  index_logs_on_user_id  (user_id)
#
class Log < ApplicationRecord
end
