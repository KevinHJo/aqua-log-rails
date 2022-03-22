class Api::PostsController < ApplicationController
  def index
    @posts = Post.all
    render 'api/posts/index'
  end

  def create
    @post = Post.new(post_params)
    
    if @post.save
      render 'api/posts/show'
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  private
  def post_params
    params.require(:post).permit(:body, :author_id, :parent_id)
  end
end