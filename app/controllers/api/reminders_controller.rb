class Api::RemindersController < ApplicationController
  def index
    @reminders = Reminder.where({owner_id: params[:user_id]})
    render 'api/reminders/index'
  end

  def create
    @reminder = Reminder.new(reminder_params)

    if @reminder.save
      render 'api/reminders/show'
    else
      render json: @reminder.errors.full_messages, status: 422
    end
  end

  private
  def reminder_params
    params.require(:reminder).permit(:body, :freq, :start_date, :end_date, :owner_id)
  end
end
