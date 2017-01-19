class RoomsController < ApplicationController
  def show
    room = Room.find(params[:id])
    messages = room.messages

    render :show, locals: {
      room: room,
      messages: messages,
      rooms: rooms
    }
  end

  def index
    render :index, locals: { rooms: rooms }
  end

  private

  def rooms
    Room.all
  end
end
