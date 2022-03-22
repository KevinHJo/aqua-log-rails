json.post do
  json.extract! @post, :id, :body, :author_id, :parent_id, :created_at, :updated_at
end

json.user do
  json.extract! @post.author, :id, :username, :email
end