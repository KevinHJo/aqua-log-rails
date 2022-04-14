class AddColumnToReminders < ActiveRecord::Migration[5.2]
  def change
    add_column :reminders, :end_date, :datetime, null: false
  end
end