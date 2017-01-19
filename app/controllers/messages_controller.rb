class MessagesController < ApplicationController
  def create
    message = Message.new(message_params)
    if message.save
      render json: message
    else
      render json: {
        error: "Couldn't create new message. Errors occured",
        status: 400
      }, status: :bad_request
    end
  end

  private

  def message_params
    params.require(:message).permit(:content, :room_id, :author)
  end
end
