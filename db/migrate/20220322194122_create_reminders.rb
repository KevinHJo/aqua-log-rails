class CreateReminders < ActiveRecord::Migration[5.2]
  def change
    create_table :reminders do |t|
      t.integer :owner_id, null: false
      t.string :body, null: false
      t.datetime :start_date, null: false
      t.integer :freq
      t.timestamps
    end

    add_index :reminders, :owner_id
  end
end
