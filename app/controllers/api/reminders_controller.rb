class Api::RemindersController < ApplicationController
  def index
    @reminders = Reminder.where({owner_id: params[:user_id]})
    render 'api/reminders/index'
  end
end
