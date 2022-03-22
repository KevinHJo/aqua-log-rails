class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.text :body, null: false
      t.integer :author_id, null: false
      t.integer :parent_id
      t.timestamps
    end

    add_index :posts, :author_id
    add_index :posts, :parent_id
  end
end
