class Api::TanksController < ApplicationController
  def index
    @tanks = Tank.where({owner_id: params[:user_id]})
    render 'api/tanks/index'
  end
  
  def show
    @tank = Tank.find(params[:id])
    render 'api/tanks/show'
  end

  def create
    @tank = Tank.new(tank_params)

    if @tank.save
      render 'api/tanks/show'
    else
      render json: @tank.errors.full_messages, status: 422
    end
  end

  private
  def tank_params
    params.require(:tank).permit(:name, :owner_id)
  end
end