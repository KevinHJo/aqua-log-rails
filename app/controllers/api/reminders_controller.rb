class Api::RemindersController < ApplicationController
  def index
    # user = User.find(params[:user_id])
    # @reminders = user.reminders

    @reminders = Reminder.where({owner_id: params[:user_id]})
    render 'api/reminders/index'
  end
end
