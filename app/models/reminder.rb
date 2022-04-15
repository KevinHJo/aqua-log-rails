# == Schema Information
#
# Table name: reminders
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  end_date   :datetime         not null
#  freq       :integer
#  start_date :datetime         not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  owner_id   :integer          not null
#
# Indexes
#
#  index_reminders_on_owner_id  (owner_id)
#
class Reminder < ApplicationRecord
  validates :body, :start_date, :owner_id, presence: true

  belongs_to :owner,
    class_name: :User
end
