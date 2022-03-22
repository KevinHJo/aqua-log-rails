# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  author_id  :integer          not null
#  parent_id  :integer
#
# Indexes
#
#  index_posts_on_author_id  (author_id)
#  index_posts_on_parent_id  (parent_id)
#
class Post < ApplicationRecord
  validates :body, :author_id, presence: true

  belongs_to :author,
    class_name: :User
  
  belongs_to :parent,
    class_name: :Post
end
