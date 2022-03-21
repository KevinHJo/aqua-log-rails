class Api::LogsController < ApplicationController
  def index
    @logs = Log.where({tank_id: params[:tank_id]})
    render 'api/logs/index'
  end

  def create
    @log = Log.new(log_params)
    
    if @log.save
      render 'api/logs/show'
    else
      render json: @log.errors.full_messages, status: 422
    end
  end

  private
  def log_params
    params.require(:log).permit(:log_type, :value, :tank_id, :user_id, :date)
  end
end