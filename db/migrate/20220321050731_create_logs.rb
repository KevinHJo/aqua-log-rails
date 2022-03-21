class CreateLogs < ActiveRecord::Migration[5.2]
  def change
    create_table :logs do |t|
      t.string :log_type, null: false
      t.integer :user_id, null: false
      t.integer :tank_id, null: false
      t.float :value, null: false
      t.datetime :date, null: false
      t.timestamps
    end

    add_index :logs, :user_id
    add_index :logs, :tank_id
  end
end
