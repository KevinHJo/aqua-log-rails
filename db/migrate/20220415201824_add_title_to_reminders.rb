class AddTitleToReminders < ActiveRecord::Migration[5.2]
  def change
    add_column :reminders, :title, :string, null: false
  end
end
