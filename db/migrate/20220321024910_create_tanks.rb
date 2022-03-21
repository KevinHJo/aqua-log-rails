class CreateTanks < ActiveRecord::Migration[5.2]
  def change
    create_table :tanks do |t|
      t.string :name, null: false
      t.integer :owner_id, null: false
      t.timestamps
    end

    add_index :tanks, :owner_id
    add_index :tanks, [:owner_id, :name], unique: true
  end
end
