class ChatroomController < ApplicationController
  def show
    render :show, locals: { rooms: Room.all }
  end
end
