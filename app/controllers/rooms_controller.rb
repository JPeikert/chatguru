class RoomsController < ApplicationController
  def index
    render json: rooms
  end

  private

  def rooms
    Room.all
  end
end
