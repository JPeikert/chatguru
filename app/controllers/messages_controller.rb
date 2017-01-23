class MessagesController < ApplicationController
  def create
    message = Message.new(message_params)
    message.user = current_user

    if message.save
      render json: message
    else
      render json: {
        error: "Couldn't create new message. Errors occured",
        status: 400
      }, status: :bad_request
    end
  end

  def index
    messages = Message.where(room_id: params[:room_id])

    render json: messages
  end

  private

  def message_params
    params.require(:message).permit(:content, :room_id)
  end
end
