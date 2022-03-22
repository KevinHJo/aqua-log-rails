class Api::PostsController < ApplicationController
  def index
    @posts = Post.where(parent_id: nil)
    @users = []
    @posts.each do |post|
      @users << post.author
    end
    render 'api/posts/index'
  end

  def show
    post = Post.find(params[:id])
    @posts = [post] + post.children
    @users = []
    @posts.each do |post_item|
      @users << post_item.author
    end
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
    params.require(:post).permit(:title, :body, :author_id, :parent_id)
  end
end